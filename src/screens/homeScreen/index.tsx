import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Header from '../../component/header';
import Search from '../../component/searchInput';
import ChatModal from '../../component/chatModal';
import userData from '../../jsonData';
import Images from '../../assets';
import { getRandomColor } from '../../component/randomcolor';


type User = {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
};

type RootStackParamList = {
    Chat: { user: User; onDelete: (userId: string) => void };
};

const HomeScreen: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [chattedUsers, setChattedUsers] = useState<User[]>([]);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        const loadChattedUsers = async () => {
            const chats = await Promise.all(
                userData.page.users.map(async (user: any) => {
                    const messages = await AsyncStorage.getItem(`messages_${user.id}`);
                    return messages ? user : null; // Return user if chat exists
                })
            );
            setChattedUsers(chats.filter(Boolean) as User[]); // Filter out null values
        };

        loadChattedUsers();
    }, []);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleDeleteUser = (userId: string) => {
        setChattedUsers(prevUsers => prevUsers.filter(user => user.id !== userId)); // Remove user from the state
    };

    const handleStartChat = () => {
        // Functionality to start a new chat
        toggleModal();
    };

    const renderProfile = ({ item }: { item: User }) => {
        const firstInitial = item.firstName.charAt(0).toUpperCase();
        const lastInitial = item.lastName.charAt(0).toUpperCase();
        const randomBackgroundColor = getRandomColor();

        return (
            <TouchableOpacity
                style={styles.resultContainer}
                onPress={() => navigation.navigate('Chat', { user: item, onDelete: handleDeleteUser })} // Pass handleDeleteUser
            >
                <View style={[styles.initialsContainer, { backgroundColor: randomBackgroundColor }]}>
                    <Text style={styles.initialsText}>{`${firstInitial}${lastInitial}`}</Text>
                </View>
                <Text >{`${item.firstName} ${item.lastName}`}</Text>
            </TouchableOpacity>
        );
    };

    const chatStartVisible = chattedUsers.length === 0; // Show chat start container if no chatted users

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.profilecontainer}>
                <Search />
                {chatStartVisible && (
                    <View style={styles.chatStart}>
                        <View style={styles.chatview}>
                            <Image source={Images.chatIcon} style={styles.chatImage} />
                        </View>
                        <Text style={styles.noChatText}>No chats yet. Start chatting!</Text>
                        <TouchableOpacity onPress={handleStartChat}>
                            <View style={styles.StartChatButton}>
                                <Text style={styles.startChatText}>Start Chat</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                <FlatList
                    data={chattedUsers}
                    renderItem={renderProfile}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <ChatModal visible={modalVisible} onClose={toggleModal} />
        </View>
    );
};

export default HomeScreen;
