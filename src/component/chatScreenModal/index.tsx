
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import strings from '../../utils/strings';
import Images from '../../assets';
import styles from './style';

interface ChatScreenModalProps {
    visible: boolean;
    onClose: () => void;
    onDelete: () => void; 
}

const ChatScreenModal = ({ visible, onClose, onDelete }: ChatScreenModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay} >
                <View style={styles.modalContent}>
                    <TouchableOpacity >
                        <View style={styles.modalContent1}>
                            <View style={styles.modalimage}>
                                <Image
                                    source={Images.view}
                                    style={styles.imagePhoto}
                                />
                            </View>
                            <Text style={styles.modaltext}>{strings.view}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.modalContent2}>
                            <View style={styles.modalimage}>
                                <Image
                                    source={Images.unpin}
                                    style={styles.imagePhoto}
                                />
                            </View>
                            <Text style={styles.modaltext}>{strings.unpin}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.modalContent2}>
                            <View style={styles.modalimage}>
                                <Image
                                    source={Images.search}
                                    style={styles.imagePhoto}
                                />
                            </View>
                            <Text style={styles.modaltext}>{strings.searchChat}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onDelete||onClose}> 
                        <View style={styles.modalContent3}>
                            <View style={styles.modalimage}>
                                <Image
                                    source={Images.bin}
                                    style={styles.imagePhoto}
                                />
                            </View>
                            <Text style={styles.modalDeleteText}>{strings.Delete}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ChatScreenModal;



