import * as React from 'react';
import { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Dishdetail from './DishdetailComponent';
import { createStackNavigator } from '@react-navigation/stack';
// import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const MenuNavigator = createStackNavigator()

function MyMenuStack()
{
  return (
    <MenuNavigator.Navigator>
      <MenuNavigator.Screen name='Menu' 
                    component={Menu}
                    />
      <MenuNavigator.Screen name='Dishdetail' 
                    component={Dishdetail}/>
    </MenuNavigator.Navigator>
  )
}


function Welcome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home component</Text>
    </View>
  );
}


const HomeNavigator = createStackNavigator()

function MyHomeStack()
{
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name='Home' component={ Welcome } />
  
    </HomeNavigator.Navigator>
  )
}



const MainNavigator = createDrawerNavigator ();

function MyMainDrawer()
{
  return(
    <MainNavigator.Navigator>
      <MainNavigator.Screen name= "Home" component ={MyHomeStack}/>
      <MainNavigator.Screen name= "Menu" component ={MyMenuStack}/>
    </MainNavigator.Navigator>
  )
}

//   Menu: {screen: Menu},
//   Dishdetail: { screen: Dishdetail }
// },{
//     initialRouteName: 'Menu',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#512DA8'
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: { 
//         color: "#fff"
//       }
//     }
// })


class Main extends Component {

  render() {
 
    return (
      <NavigationContainer>
        <MyMainDrawer />
      </NavigationContainer>

    );
  }
}

export default Main;