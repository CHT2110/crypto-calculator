import { StyleSheet, View, Text } from "react-native";

const FilterPortfolioValue = () => {
    return (
        <View style = {styles.container}>
            
            <Text style = {styles.text}>
                1W | 1M | 1Y | YTD | All Time
            </Text>

        </View>
    );
};

export default FilterPortfolioValue

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
        borderWidth: 1,
    },

    text: {
        color: "white",
    }
});
