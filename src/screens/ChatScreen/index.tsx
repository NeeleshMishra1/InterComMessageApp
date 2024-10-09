import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
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
    const [modalVisible, setModalVisible] = React.useState<boolean>(false); // Emoji/Message modal
    const [chatModalVisible, setChatModalVisible] = React.useState<boolean>(false); // Chat delete modal
    const [selectedMessage, setSelectedMessage]:any = React.useState<IMessage | null>(null);

    const { user, onDelete } = route.params; 

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

    const openEmojiDeleteModal = (message: IMessage) => {
        setSelectedMessage(message);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const openChatModal = () => {
        setChatModalVisible(true);
    };

    const closeChatModal = () => {
        setChatModalVisible(false);
    };

    const deleteChat = async () => {
        try {
            await AsyncStorage.removeItem(`messages_${user.id}`);
            setMessages([]); 
            onDelete(user.id); 
            closeChatModal();
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
                textInputProps={{
                    returnKeyType: 'send', 
                    blurOnSubmit: true, 
                    onSubmitEditing: () => {
                        if (props.text && props.onSend) {
                            props.onSend({ text: props.text.trim() }, true); 
                            props.text = ''; 
                        }
                    },
                    multiline: false, 
                }}
            />
        );
    };

    const handleMessagePress = (message: IMessage) => {
        openEmojiDeleteModal(message);
    };

    const renderMessage = (props: { currentMessage: IMessage }) => {
        const currentMessage: IMessage = props.currentMessage;
        const emoji = currentMessage.emoji || ''; 

        return (
            <TouchableOpacity onPress={() => handleMessagePress(currentMessage)}>
                <Message {...props} />
                {emoji && (
                    <Text style={styles.emojiText}>{emoji}</Text> 
                )}
            </TouchableOpacity>
        );
    };

    const handleDeleteMessage = async (messageId: string) => {
        const updatedMessages = messages.filter(message => message._id !== messageId);
        setMessages(updatedMessages);
        await AsyncStorage.setItem(`messages_${user.id}`, JSON.stringify(updatedMessages));
        setSelectedMessage(null);
        setModalVisible(false); 
    };

    const handleEmojiSelect = async (emoji: string) => {
        if (selectedMessage) {
            const updatedMessages = messages.map(message => {
                if (message._id === selectedMessage._id) {
                    return { ...message, emoji };
                }
                return message;
            });
            setMessages(updatedMessages);
            await AsyncStorage.setItem(`messages_${user.id}`, JSON.stringify(updatedMessages));
            setSelectedMessage(null);
            setModalVisible(false);
        }
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
                <TouchableOpacity onPress={openChatModal}>
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

            <ChatScreenModal visible={chatModalVisible} onClose={closeChatModal} onDelete={deleteChat} />

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Emoji</Text>
                        <FlatList
                            data={emojiArray}
                            horizontal
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleEmojiSelect(item)}>
                                    <Text style={styles.modalEmoji}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity onPress={() => handleDeleteMessage(selectedMessage?._id)}>
                            <Text style={styles.deleteText}>Delete Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.closeModalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaProvider>
    );
};

export default ChatScreen;







