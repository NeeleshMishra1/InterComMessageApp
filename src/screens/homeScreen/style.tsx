import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#E6EDF3"
    },
    container2: {
        flex: 1,
        padding: 20,
    },
    chatStart: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingTop: 180,
    },
    noChatText: {
        fontSize: 22,
        fontWeight: "700",
    },
    StartChatButton: {
        height: 60,
        backgroundColor: "#2B7BBB",
        width: 170,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        borderRadius: 10,
    },
    startChatText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500"
    }, chatImage: {
        width: 170,
        height: 170,
        resizeMode: "contain"
    },
    chatview: {
        width: 200,
        height: 150,
    },
    resultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "white",
        padding: 15,
        marginTop: 5,
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
        backgroundColor: '#007BFF',
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
    profilecontainer: {
        padding: 10
    }
});

export default styles;