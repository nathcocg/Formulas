import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import AlarmScreen from "../screens/AlarmScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FormulaScreen from "../screens/FormulaScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === "HomeScreen") {
                  iconName = Icon.getImageSource('home', 20, 'red' ).then(source => 
                    this.setState({userIcon : "../assets/home.png"}));
                } else if (route.name === "AlarmScreen") {
                  iconName = Icon.getImageSource('home', 20, 'red' ).then(source => 
                    this.setState({userIcon : "../assets/alert2.png"}));
                } else if (route.name === "FormulaScreen") {
                  iconName = Icon.getImageSource('home', 20, 'red' ).then(source => 
                    this.setState({userIcon : "../assets/list.png"}));
                }
                // Você pode retornar qualquer componente que quiser aqui!
                return (
                  <Ionicons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }
            })}
            tabBarOptions={{
              activeTintColor: "#FFFFFF",
              inactiveTintColor: "black",
              style: {
                height: 130,
                borderTopWidth: 0,
                backgroundColor: "#5653d4"
              },
              labelStyle: {
                fontSize: 20,
                fontFamily: "Rajdhani_600SemiBold"
              },
              labelPosition: "beside-icon",
              tabStyle: {
                marginTop: 25,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 30,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#5653d4"
              }
            }}
          >
            <Tab.Screen name="Página Inicial" component={HomeScreen} />
            <Tab.Screen name="Alarmes" component={AlarmScreen} />
            <Tab.Screen name="Fórmula" component={FormulaScreen} />
            <Tab.Screen name="Detalhes" component={DetailsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

