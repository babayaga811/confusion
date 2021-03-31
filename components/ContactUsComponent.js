import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, View, Text, FlatList,Image, StatusBar,SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

class  ContactUsComponent extends Component{
    render(){
    return(
        <Card>
          <Card.Title>Contact Information</Card.Title>
            <Text>121, Clear Water Bay Road {"\n"}
                  Clear Water Bay, Kowloon{"\n"}
                  HONG KONG{"\n"}
                  Tel: +852 1234 5678{"\n"}
                  Fax: +852 8765 4321{"\n"}
                  Email:confusion@food.net</Text>
        </Card>
    )
    }
};

export default ContactUsComponent;