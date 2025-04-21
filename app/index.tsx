import {
  Button,
  SafeAreaView, 
  StyleSheet, 
  Text,
  View
} from "react-native";

import GraphPortfolioValue from "./components/portfolio/GraphPortfolioValue";
import FilterPortfolioValue from "./components/portfolio/FilterPortfolioValue";
import TitlePortfolio from "./components/portfolio/TitlePortfolio";
import TitleAccounts from "./components/portfolio/TitleAccounts";
import MenuAccount from "./components/portfolio/MenuAccount";
import Menunavigation from "./components/portfolio/MenuNavigation";

export default function Index() {

  return (
    <SafeAreaView
      style = {styles.container}
    >
    <TitlePortfolio/>
    <GraphPortfolioValue/>
    <FilterPortfolioValue/>
    <TitleAccounts/>
    <MenuAccount/>
    <Menunavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    margin: 3
  },

});



//<View 
//style = {styles.blockOne}
//>
//<Text style = {colours.primary}> 
//  Time to calculate crypto!!!
//</Text>
//</View>
//
//<View 
//style = {styles.blockTwo}
//>
//<Button 
//title = "Click Me"
//color = {colours.primary.color}
//onPress = {() => console.log("Button tapped")}
///>
//</View>
//<View 
//style = {styles.blockThree}
//>
//</View>