import React, { useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './style';
import Images from '../../assets';
import strings from '../../utils/strings';

type RootStackParamList = {
  bottom: undefined;
};

const Splace = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'bottom' }],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleHome();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={Images.splace}
        style={styles.container2}
      />
      <Text style={styles.intercomText}>{strings.Intercom}</Text>
    </View>
  );
};

export default Splace;

