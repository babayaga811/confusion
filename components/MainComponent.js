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
import CorporateLeader from './LeaderComponent';
import  ContactUsComponent  from './ContactUsComponent';

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

const HomeNavigator = createStackNavigator()

function MyHomeStack()
{
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name='Home' component={ Home } />
    </HomeNavigator.Navigator>
  )
}

const AboutNavigator = createStackNavigator()

function MyAboutStack(){

  return(
    <AboutNavigator.Navigator>
    <AboutNavigator.Screen name='About' component={ CorporateLeader }/>
    </AboutNavigator.Navigator>
  )
}

const ContactNavigator = createStackNavigator()

function ContactUs(){
  return(
  <ContactNavigator.Navigator>
    <ContactNavigator.Screen name= "Contact Us" component= { ContactUsComponent }/>
  </ContactNavigator.Navigator>
  )
}

const MainNavigator = createDrawerNavigator ();

function MyMainDrawer()
{
  return(
    <MainNavigator.Navigator>
      <MainNavigator.Screen name= "Home" component ={MyHomeStack}/>
      <MainNavigator.Screen name= "Menu" component ={MyMenuStack}/>
      <MainNavigator.Screen name= "About Us" component={MyAboutStack}/>
      <MainNavigator.Screen name= "Contact Us" component={ContactUs}/>
    </MainNavigator.Navigator>
  )
}


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