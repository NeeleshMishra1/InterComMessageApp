import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Images from '../../assets';
import { GiftedChat, IMessage, InputToolbar, Message, Send } from 'react-native-gifted-chat';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChatScreenModal from '../../component/chatScreenModal';

type User = {
    id: string;
    firstName: string;
    lastName: string;
};

type ChatScreenProps = {
    route: {
        params: {
            user: User;
            onDelete: (userId: string) => void;
        };
    };
};

type MessagesState = IMessage[];

const ChatScreen = ({ route }: ChatScreenProps) => {
    const [messages, setMessages] = React.useState<MessagesState>([]);
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [selectedMessage, setSelectedMessage]: any = React.useState<IMessage | null>(null);
    const [emojiArrayVisible, setEmojiArrayVisible] = React.useState<boolean>(false);
    
    const { user, onDelete } = route.params; // Destructure onDelete from route params

    const firstInitial = user.firstName.charAt(0).toUpperCase();
    const lastInitial = user.lastName.charAt(0).toUpperCase();
    const initials = `${firstInitial}${lastInitial}`;

    const emojiArray = ['😊', '😂', '❤️', '👍', '🙌', '😢', '🔥', '😎'];

    const loadMessages = async () => {
        try {
            const storedMessages = await AsyncStorage.getItem(`messages_${user.id}`);
            if (storedMessages) {
                setMessages(JSON.parse(storedMessages));
            }
        } catch (error) {
            console.error('Failed to load messages:', error);
        }
    };

    const saveMessages = async (newMessages: IMessage[]) => {
        try {
            const updatedMessages = GiftedChat.append(messages, newMessages);
            await AsyncStorage.setItem(`messages_${user.id}`, JSON.stringify(updatedMessages));
        } catch (error) {
            console.error('Failed to save messages:', error);
        }
    };

    React.useEffect(() => {
        loadMessages();
    }, []);

    const onSend = React.useCallback((newMessages: IMessage[]) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
        saveMessages(newMessages);
    }, [messages]);

    const navigation = useNavigation<NavigationProp<any>>();

    const handleHome = () => {
        navigation.navigate('bottom');
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const deleteChat = async () => {
        try {
            await AsyncStorage.removeItem(`messages_${user.id}`);
            setMessages([]); // Clear messages from state
            onDelete(user.id); // Call the onDelete function to remove user from HomeScreen
            closeModal();
        } catch (error) {
            console.error('Failed to delete messages:', error);
        }
    };

    const renderInputToolBar = (props: any) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    borderRadius: 10,
                    marginHorizontal: 8,
                    marginTop: 5,
                    borderTopWidth: 0,
                }} 
            />
        );
    };

    const handleMessagePress = (message: IMessage) => {
        setSelectedMessage(message);
        setEmojiArrayVisible(true); // Show the emoji array
    };

    const renderMessage = (props: { currentMessage: IMessage }) => {
        const currentMessage: any = props.currentMessage;
        const emoji = currentMessage.emoji || ''; // Get emoji from message if it exists

        return (
            <TouchableOpacity onPress={() => handleMessagePress(currentMessage)}>
                <Message {...props} />
                {selectedMessage && selectedMessage._id === currentMessage._id && emojiArrayVisible && (
                    <View style={styles.messageOptions}>
                        {/* Display emoji array */}
                        {emojiArray.map((emoji, index) => (
                            <TouchableOpacity key={index} onPress={() => handleEmojiSelect(currentMessage._id, emoji)}>
                                <Text style={styles.optionText}>{emoji}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={() => handleDeleteMessage(selectedMessage._id)}>
                            <Text style={styles.optionText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {emoji && (
                    <Text style={styles.emojiText}>{emoji}</Text> // Display the emoji next to the message
                )}
            </TouchableOpacity>
        );
    };

    const handleDeleteMessage = async (messageId: string) => {
        const updatedMessages = messages.filter(message => message._id !== messageId);
        setMessages(updatedMessages);
        await AsyncStorage.setItem(`messages_${user.id}`, JSON.stringify(updatedMessages));
        setSelectedMessage(null); // Reset selected message
        setEmojiArrayVisible(false); 
    };

    //  handle emoji selection
    const handleEmojiSelect = async (messageId: string, emoji: string) => {
        const updatedMessages = messages.map(message => {
            if (message._id === messageId) {
                return { ...message, emoji }; // Add the emoji to the message
            }
            return message;
        });
        setMessages(updatedMessages);
        await AsyncStorage.setItem(`messages_${user.id}`, JSON.stringify(updatedMessages));
        setSelectedMessage(null); // Reset selected message
        setEmojiArrayVisible(false); // Hide the emoji array after selection
    };

    const renderSend = (props: any) => {
        return (
            <Send {...props} containerStyle={{}}>
                <Image
                    source={Images.sendIcon}
                    style={{ marginRight: 10, marginBottom: 5, width: 35, height: 35 }}
                    resizeMode="center"
                />
            </Send>
        );
    };

    return (
        <SafeAreaProvider>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleHome}>
                    <View style={styles.imageBox}>
                        <Image source={Images.blackArrow} style={styles.imagePhoto} />
                    </View>
                </TouchableOpacity>
                <View style={styles.initialsContainer}>
                    <Text style={styles.initialsText}>{initials}</Text>
                </View>
                <Text style={styles.headerText}>{user.firstName} {user.lastName}</Text>
                <TouchableOpacity onPress={openModal}>
                    <View style={styles.imageBox1}>
                        <Image source={Images.threeDot} style={styles.imagePhoto} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 40, flex: 1, padding: 10, backgroundColor: "#E1E1E1" }}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    alwaysShowSend
                    scrollToBottom
                    loadEarlier={true}
                    renderInputToolbar={renderInputToolBar}
                    renderMessage={renderMessage}
                    renderSend={renderSend}
                />
            </View>
            <ChatScreenModal visible={modalVisible} onClose={closeModal} onDelete={deleteChat} />
        </SafeAreaProvider>
    );
};

export default ChatScreen;




