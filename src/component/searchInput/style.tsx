import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor:"white", 
      },
      searchIcon: {
        width: 25,
        height: 25,
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        height: '100%',
        fontSize:18
      },
      

});

export default styles;