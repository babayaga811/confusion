import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, FlatList,Image, StatusBar } from 'react-native';
import { DISHES } from '../shared/dishes';

class Home extends Component {

    static navigationOptions ={
        title: 'Home'
    };
    render(){
        return(
            <View><Text>Home Component</Text></View>
        )
    }
}