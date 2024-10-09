import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EDF3",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#F8F9F9',
    paddingTop: 60,
    paddingBottom: 15,
    padding: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  initialsContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  initialsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "70%",
    margin: 10,
    height: 45,
    marginBottom: 20,
  },
  sendButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageBox: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePhoto: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
  imageBox1: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 10,
    width: "80%"
  },
  addIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  chatContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  messageOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
  optionText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'blue',
  },
  emojiText: {
    position: 'absolute',
    right: 10,
    top: 5,
    fontSize: 20,
  },

  modalContainer: {
    flex:1,
    justifyContent: 'flex-end',
},
modalContent: {
    backgroundColor: '#FFF',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:40,
},
modalTitle: {
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 10,
   
},
modalEmoji: {
    fontSize: 30,
    marginHorizontal: 10,
},
deleteText: {
    color: 'red',
    fontSize: 23,
    textAlign: 'center',
    fontWeight:"600",
    padding:10,
},
closeModalText: {
    fontSize: 23,
    padding:10,
    textAlign: 'center',
    color: '#007BFF',
    fontWeight:"600",
},
  
});

export default styles;

