
import {Text, StyleSheet} from "react-native"

const TitlePortfolio = () => {
    return (
        <Text style = {styles.text}>
            Portfolio
        </Text>
    );
};

export default TitlePortfolio

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 15
    }
});