
import React from 'react';
import { View, TextInput, Image, StyleSheet, SafeAreaView } from 'react-native';
import Images from '../../assets'; 
import styles from './style';

const Searchscreen = () => {
  return (
    <SafeAreaView >
      <View style={styles.searchContainer}>
        <View>
        <Image source={Images.searchicon} style={styles.searchIcon} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages..."
          placeholderTextColor="#888"
        />
      </View>
    </SafeAreaView>
  );
};

export default Searchscreen;
