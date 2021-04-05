import * as React from 'react';
import { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { StyleSheet, Text, View, Platform,Image,SafeAreaView, ScrollView } from 'react-native';
import Dishdetail from './DishdetailComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerItem, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import CorporateLeader from './LeaderComponent';
import  ContactUsComponent  from './ContactUsComponent';
import {Icon} from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';

const MenuNavigator = createStackNavigator()

function MyMenuStack(props)
{
  return (
    <MenuNavigator.Navigator>
      <MenuNavigator.Screen name='Menu' 
                    component={Menu}
                    options= {{ headerLeft: ()=> <Icon name='menu' size={24}
                              color='black' TextStyle={{ marginLeft:50, paddingLeft:25}}
                            onPress ={()=> props.navigation.toggleDrawer()}/>
                    }}
                    />
      <MenuNavigator.Screen name='Dishdetail' 
                    component={Dishdetail}/>
    </MenuNavigator.Navigator>
  )
}

const HomeNavigator = createStackNavigator()

function MyHomeStack(props)
{
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name='Home' component={ Home }
       options= {{ headerLeft: ()=> <Icon name='home' size={24}
       color='black' 
     onPress ={()=> props.navigation.toggleDrawer()}/>
}} />
    </HomeNavigator.Navigator>
  )
}

const AboutNavigator = createStackNavigator()

function MyAboutStack(props){

  return(
    <AboutNavigator.Navigator>
    <AboutNavigator.Screen name='About' component={ CorporateLeader }
     options= {{ headerLeft: ()=> <Icon name='about' size={24}
     color='black' 
   onPress ={()=> props.navigation.toggleDrawer()}/>
}}/>
    </AboutNavigator.Navigator>
  )
}

const ContactNavigator = createStackNavigator()

function ContactUs(props){
  return(
  <ContactNavigator.Navigator>
    <ContactNavigator.Screen name= "Contact Us" component= { ContactUsComponent }
     options= {{ headerLeft: ()=> <Icon name='contact' size={24}
     color='white' 
   onPress ={()=> props.navigation.toggleDrawer()}/>
}}/>
  </ContactNavigator.Navigator>
  )
}

const CustomDrawerContent = (props)=>(

<DrawerContentScrollView>
  <SafeAreaView style={StyleSheet.container}
            >
         <View style={{flex: 1,flexDirection: 'row',
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor: 'purple',
                    height:120}}>
           <View style={{flex:1,flexDirection: 'row',
                    justifyContent:'center', marginLeft:10,
                   }}>
             <Image source={require('./images/logo.png')} 
                    style={styles.drawerImage }/>
             </View>
             <View style={{flex: 3,flexDirection: 'row',
                    justifyContent:'center',
                    alignSelf: 'center'}}>
               <Text style={styles.drawerHeaderText}>
                 Ristorante Con Fusion</Text>
             </View>
         </View>  
         
         <DrawerItemList {...props}/>  
         
  </SafeAreaView>
</DrawerContentScrollView> 
);


const MainNavigator = createDrawerNavigator ();

function MyMainDrawer()
{
  return(
    <MainNavigator.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <MainNavigator.Screen name= "Home" component ={MyHomeStack} 
      options= {{ drawerIcon:({focused,size})=>(<Icon name= "home"/>)}}/>
      <MainNavigator.Screen name= "Menu" component ={MyMenuStack}
      options= {{ drawerIcon:({focused,size})=>(<Icon name= "menu"/>)}}/>
      <MainNavigator.Screen name= "About Us" component={MyAboutStack}
      options= {{ drawerIcon:({focused,size})=>(<Icon name= "help"/>)}}/>
      <MainNavigator.Screen name= "Contact Us" component={ContactUs}
      options= {{ drawerIcon:({focused,size})=>(<Icon name= "phone"/>)}}/>
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

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  drawerHeader:{
    backgroundColor:'yellow',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
    
  }
});


export default Main;