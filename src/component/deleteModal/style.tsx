import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: "80%",
    height: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: 70,
    height: 70,
    backgroundColor:"#FDE5E3",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
  },
  image1: {
    width: 40,
    height: 40,
    resizeMode: 'contain', 
  },
  modalText: {
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 20,
  },
  modalText1: {
    fontWeight: '400',
    fontSize: 15,
    color: 'grey',
  },
  modalButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white', // Ensures button text is visible
    fontWeight: '600',
  },
  buttoncontainer:{
    flexDirection:"row",
   
  },modalButton1:{
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft:20,
  }
});

export default styles;
