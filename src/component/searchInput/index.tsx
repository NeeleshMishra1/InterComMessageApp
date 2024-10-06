import React from 'react';
import { View, TextInput, Image, SafeAreaView } from 'react-native';
import Images from '../../assets';
import styles from './style';

type SearchProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const Searchscreen = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View>
          <Image source={Images.searchicon} style={styles.searchIcon} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery} // Update search query when input changes
        />
      </View>
    </SafeAreaView>
  );
};

export default Searchscreen;
