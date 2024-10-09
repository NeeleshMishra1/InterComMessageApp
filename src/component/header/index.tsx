
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp , CommonActions} from '@react-navigation/native';
import styles from './style';
import Images from '../../assets';
import strings from '../../utils/strings';

type RootStackParamList = {
  Search: undefined;
};

const Header= () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

 

const handleHome = () => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: 'Search' }],
        })
    );
};


  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.headerBox}>
        <TouchableOpacity>
          <View style={styles.imageBox}>
            <Image
              source={Images.arrow}
              style={styles.imagePhoto}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.message}>{strings.message}</Text>
          <Text style={styles.message1}>45 Contacts</Text>
        </View>
        <TouchableOpacity onPress={handleHome}>
          <View style={styles.imageBox1}>
            <Image
              source={Images.plus}
              style={styles.imagePhoto1}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

