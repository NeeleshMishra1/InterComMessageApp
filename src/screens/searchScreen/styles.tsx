
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Safecontainer: {
    flex: 1,
    backgroundColor: "#E6EDF3",
  },
  container1: {
    height: 70,
    backgroundColor: "#E6EDF3",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  imageBox: {
    width: 50,
    height: 50,
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
  searchContainer: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 20,
    width: "80%",
    borderRadius: 5,
    justifyContent: "center",
    paddingLeft: 20,
  },
  searchInput: {
    fontSize: 18,
    height: "100%",
  },
  resultsList: {
    marginTop: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
    shadowColor: "#000", // iOS shadow
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3, // Android shadow
  },
  initialsContainer: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,

  },
  initialsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
    color: "#333",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
    marginTop: 20,
  },
  noResultContainer: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    margin: 20,
    marginVertical: 70,
  },
  noResultImage: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  noResultImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;
