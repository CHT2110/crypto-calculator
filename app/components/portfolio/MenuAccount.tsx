import {View, Text, StyleSheet} from "react-native"

const AccountMenu = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.accounts}>
                <Text style = {styles.text}>
                    All Accounts - €1,000
                </Text>
            </View>
            <View style = {styles.accounts}>
                <Text style = {styles.text}>
                    BitCoin - €800
                </Text>
            </View>
            <View style = {styles.accounts}>
                <Text style = {styles.text}>
                    Solana - €200
                </Text>
            </View>

        </View>
    );
};

export default AccountMenu

const styles = StyleSheet.create({
    container: {
        color: "white",
        justifyContent: "center",
        alignItems: "stretch"
    },

    accounts: {
        backgroundColor: "#4DD0E1",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
    },

    text: {
        color: "black",
        fontSize: 20,
    }
})