
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import styles from './style';
import strings from '../../utils/strings';
import Images from '../../assets';
import { useNavigation } from '@react-navigation/native';

interface StartChatModalProps {
    visible: boolean;
    onClose: () => void;
    
}
const ChatModal = ({ visible, onClose }:StartChatModalProps) => {
    const navigation = useNavigation();

  const handleHome = () => {
    onClose();
    navigation.navigate('Search');
  };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
                <TouchableOpacity onPress={handleHome}>
                <View style={styles.modalContent}>
                    <View style={styles.modalContent1}>
                        <View style={styles.modalimage}>
                            <Image
                                source={Images.NewChatIcon}
                                style={styles.imagePhoto}
                            />
                        </View>
                        <Text style={styles.modaltext}>{strings.newChat}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

export default ChatModal;


