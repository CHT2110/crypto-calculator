import {View, Text, StyleSheet} from "react-native"

const Menunavigation = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.accounts}>
                <Text style = {styles.text}>
                    Portfolio
                </Text>
            </View>
            <View style = {styles.accounts}>
                <Text style = {styles.text}>
                    Performance
                </Text>
            </View>
            <View style = {styles.accounts}>
                <Text style = {styles.text}>
                    Transactions
                </Text>
            </View>

        </View>
    );
};

export default Menunavigation

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        color: "white",
        justifyContent: "space-around",
        flexDirection: "row"
    },

    accounts: {
        backgroundColor: "#EF5350",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 12,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
    },

    text: {
        color: "black",
        fontSize: 20,
    }
})