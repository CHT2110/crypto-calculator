import { StyleSheet, View, Text } from "react-native";

const PortfolioValueGraph = () => {
    return (
        <View style = {styles.container}>
            
            <Text style = {styles.text}>
                Placeholder for graph of total portfolio value
            </Text>

        </View>
    );
};

export default PortfolioValueGraph

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#42A5F5',
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },

    text: {
        color: "white",
        fontSize: 16
    }
});
