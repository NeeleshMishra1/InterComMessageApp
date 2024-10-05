import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Header from '../../component/header';
import Search from '../../component/searchInput';
import ChatModal from '../../component/chatModal';
import userData from '../../jsonData';
import { getRandomColor } from '../../component/randomcolor';

// Define the User type
type User = {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
};

// Define the navigation parameters for the chat screen
type RootStackParamList = {
    Chat: { user: User; onDelete: (userId: string) => void }; 
};

// Define the HomeScreen component
const HomeScreen: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [chattedUsers, setChattedUsers] = useState<User[]>([]);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        const loadChattedUsers = async () => {
            const chats = await Promise.all(
                userData.page.users.map(async (user: User) => {
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
                <Text style={styles.nameText}>{`${item.firstName} ${item.lastName}`}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.profilecontainer}>
                <Search />
                <FlatList
                    data={chattedUsers}
                    renderItem={renderProfile}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <ChatModal visible={modalVisible} toggleModal={toggleModal} />
        </View>
    );
};

export default HomeScreen;
