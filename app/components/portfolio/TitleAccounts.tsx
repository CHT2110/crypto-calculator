
import {Text, StyleSheet} from "react-native"

const TitleAccounts = () => {
    return (
        <Text style = {styles.text}>
            Accounts
        </Text>
    );
};

export default TitleAccounts

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15
    }
});