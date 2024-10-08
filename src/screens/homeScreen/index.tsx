import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation, NavigationProp, useIsFocused, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Header from '../../component/header';
import ChatModal from '../../component/chatModal';
import userData from '../../jsonData';
import Images from '../../assets';
import { getRandomColor } from '../../component/randomcolor';
import Searchscreen from '../../component/searchInput';

type User = {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
};

type RootStackParamList = {
    Chat: { user: User; onDelete: (userId: string) => void };
};

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [chattedUsers, setChattedUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); 
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const isFocused = useIsFocused()

    useEffect(() => {
        const loadChattedUsers = async () => {
            const chats = await Promise.all(
                userData.page.users.map(async (user: any) => {
                    const messages = await AsyncStorage.getItem(`messages_${user.id}`);
                    return messages ? user : null; 
                })
            );
            setChattedUsers(chats.filter(Boolean) as User[]); 
        };

        loadChattedUsers();
    }, [isFocused]);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleDeleteUser = (userId: string) => {
        setChattedUsers(prevUsers => prevUsers.filter(user => user.id !== userId)); 
    };

    const handleStartChat = () => {
        toggleModal();
    };

    const renderProfile = ({ item }: { item: User }) => {
        const firstInitial = item.firstName.charAt(0).toUpperCase();
        const lastInitial = item.lastName.charAt(0).toUpperCase();
        const randomBackgroundColor = getRandomColor();

        return (
            <TouchableOpacity
                style={styles.resultContainer}
                onPress={() =>
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'Chat',
                                    params: { user: item, onDelete: handleDeleteUser }
                                }
                            ]
                        })
                    )
                }
            >
                <View style={[styles.initialsContainer, { backgroundColor: randomBackgroundColor }]}>
                    <Text style={styles.initialsText}>{`${firstInitial}${lastInitial}`}</Text>
                </View>
                <Text>{`${item.firstName} ${item.lastName}`}</Text>
            </TouchableOpacity>
        );
    };

    const filteredUsers = chattedUsers.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const chatStartVisible = chattedUsers.length === 0;

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.profilecontainer}>
                <Searchscreen searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
                <ScrollView>
                    <FlatList
                        data={filteredUsers}
                        renderItem={renderProfile}
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>
            </View>
            <ChatModal visible={modalVisible} onClose={toggleModal} />
        </View>
    );
};

export default HomeScreen;







