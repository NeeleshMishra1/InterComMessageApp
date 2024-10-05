import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
      },
      modalimage:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
      },
      modalContent1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        width:250,
        borderBottomWidth:1,
        borderBottomColor:"grey",
      },
      modaltext:{
        paddingLeft:20,
        fontSize:20,
        fontWeight:"500"
      },
      imagePhoto:{
        width:40,
        height:40,
      },
   

});

export default styles;