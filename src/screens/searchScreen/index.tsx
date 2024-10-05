
import React, { useState } from 'react';
import { View, TextInput, Image, SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Images from '../../assets';
import styles from './styles';
import userData from '../../jsonData';
import { getRandomColor } from '../../component/randomcolor';


type RootStackParamList = {
  bottom: undefined;
  Chat: { user: User };
};

type User = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const SearchPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<User[]>([]);

  const handleHome = () => {
    navigation.navigate('bottom');
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    if (text.trim() === '') {
      setFilteredData([]); // Reset to empty if the search term is empty
    } else {
      const filtered = userData.page.users.filter((user: User) =>
        user.firstName.toLowerCase().includes(text.toLowerCase()) ||
        user.lastName.toLowerCase().includes(text.toLowerCase()) ||
        user.phoneNumber.includes(text)
      );
      setFilteredData(filtered);
    }
  };

  const renderItem = ({ item }: { item: User }) => {
    const firstInitial = item.firstName.charAt(0).toUpperCase();
    const lastInitial = item.lastName.charAt(0).toUpperCase();

    const randomBackgroundColor = getRandomColor();

    return (
      <TouchableOpacity
        style={styles.resultContainer}
        onPress={() => navigation.navigate('Chat', { user: item })}
      >
        <View style={[styles.initialsContainer, { backgroundColor: randomBackgroundColor }]}>
          <Text style={styles.initialsText}>{firstInitial}{lastInitial}</Text>
        </View>
        <View>
          <Text style={styles.resultText}>{item.firstName} {item.lastName}</Text>
          <Text style={styles.resultText}>{item.phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.Safecontainer}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={handleHome}>
          <View style={styles.imageBox}>
            <Image source={Images.blackArrow} style={styles.imagePhoto} />
          </View>
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            placeholderTextColor="#888"
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={styles.resultsList}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.noResultContainer}>
            <View style={styles.noResultImageContainer}>
              <Image source={Images.noResult} style={styles.noResultImage} />
            </View>
            <Text style={styles.noResultsText}>No results found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SearchPage;




