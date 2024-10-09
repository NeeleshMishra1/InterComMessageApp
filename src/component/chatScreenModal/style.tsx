import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  modalimage: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 250,
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
  modaltext: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: "500"
  },
  imagePhoto: {
    width: 30,
    height: 30,
  },
  modalContent2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 250,
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
  modalContent3: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 250,
    paddingBottom: 50,
  },
  modalDeleteText: {
    color: "red", paddingLeft: 20,
    fontSize: 18,
    fontWeight: "500",
  }
});

export default styles;