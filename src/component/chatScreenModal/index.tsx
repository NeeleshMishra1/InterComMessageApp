
// import React from 'react';
// import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import strings from '../../utils/strings';
// import Images from '../../assets';
// import styles from './style';
// import { useNavigation } from '@react-navigation/native';

// interface StartChatModalProps {
//     visible: boolean;
//     onClose: () => void;

// }
// const ChatScreenModal = ({ visible, onClose }: StartChatModalProps) => {
//     const navigation = useNavigation();

//     return (
//         <Modal
//             animationType="slide"
//             transparent={true}
//             visible={visible}
//             onRequestClose={onClose}
//         >
//             <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>


//                 <View style={styles.modalContent}>
//                     <TouchableOpacity>
//                         <View style={styles.modalContent1}>
//                             <View style={styles.modalimage}>
//                                 <Image
//                                     source={Images.view}
//                                     style={styles.imagePhoto}
//                                 />
//                             </View>
//                             <Text style={styles.modaltext}>{strings.view}</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                         <View style={styles.modalContent2}>
//                             <View style={styles.modalimage}>
//                                 <Image
//                                     source={Images.unpin}
//                                     style={styles.imagePhoto}
//                                 />
//                             </View>
//                             <Text style={styles.modaltext}>{strings.unpin}</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                         <View style={styles.modalContent2}>
//                             <View style={styles.modalimage}>
//                                 <Image
//                                     source={Images.search}
//                                     style={styles.imagePhoto}
//                                 />
//                             </View>
//                             <Text style={styles.modaltext}>{strings.searchChat}</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                         <View style={styles.modalContent3}>
//                             <View style={styles.modalimage}>
//                                 <Image
//                                     source={Images.bin}
//                                     style={styles.imagePhoto}
//                                 />
//                             </View>
//                             <Text style={styles.modalDeleteText}>{strings.Delete}</Text>
//                         </View>
//                     </TouchableOpacity>

//                 </View>
//             </TouchableOpacity>
//         </Modal>
//     );
// };

// export default ChatScreenModal;




import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import strings from '../../utils/strings';
import Images from '../../assets';
import styles from './style';

interface ChatScreenModalProps {
    visible: boolean;
    onClose: () => void;
    onDelete: () => void; // New prop for delete functionality
}

const ChatScreenModal = ({ visible, onClose, onDelete }: ChatScreenModalProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
                <View style={styles.modalContent}>
                    <TouchableOpacity>
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

                    <TouchableOpacity onPress={onDelete}> 
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
            </TouchableOpacity>
        </Modal>
    );
};

export default ChatScreenModal;



