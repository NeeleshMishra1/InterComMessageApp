import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Images from '../../assets';



interface ChatScreenModalProps {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void; 
}

const ConfirmationModal = ({ visible, onClose, onDelete }: ChatScreenModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.modalImage}>
          <Image
            source={Images.bin}
            style={styles.image1}
          />
        </View>
        <Text style={styles.modalText}>Delete message ?</Text>
        <Text style={styles.modalText1}>Are you sure you want to delete this </Text>
        <Text style={styles.modalText1}>message?</Text>
        <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={onClose}>
          <View style={styles.modalButton}>
            <Text style={styles.modalButtonText}>No,Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <View style={styles.modalButton1}>
            <Text style={styles.modalButtonText}>Yes,Delete</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationModal;



