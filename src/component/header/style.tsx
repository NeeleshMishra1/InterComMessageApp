import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container1: {
        paddingTop:20,
        backgroundColor: "#2B7BBB",
    },
    headerBox: {
        height: 60,
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    imageBox: {
        width: 45,
        height: 45,
        backgroundColor: "#3F88C2",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    imageBox1: {
        width: 45,
        height: 45,
        backgroundColor: "#3F88C2",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        left: 100,
    },
    message: {
        paddingHorizontal: 20,
        fontSize: 21,
        fontWeight: "600",
        color: "white",
    },
    message1: {
        paddingHorizontal: 20,
        fontSize: 14,
        fontWeight: "500",
        color: "#AACAE4",
    },
    imagePhoto: {
        resizeMode: "contain",
        width: 25,
        height: 25,
    },
    imagePhoto1: {
        resizeMode: "contain",
        width: 20,
        height: 20,
    },
});

export default styles;