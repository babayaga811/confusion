import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, FlatList,Image, ScrollView } from 'react-native';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Card } from 'react-native-elements';

function RenderItem (props) {
    const item = props.item ;

    if (item!= null){return ( 
        <Card>
             <Card.FeaturedTitle style={{color:'green'}}>{item.name}</Card.FeaturedTitle> 
             <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle> 
             <Card.Image source={require('./images/uthappizza.png')}
                            style={{justifyContent:'center'}}>
            </Card.Image>
            <Text style={{margin: 10}}>
                    {item.description}
            </Text>  
        </Card>
    )}
}

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    static navigationOptions ={
        title: 'Home'
    };

    render(){
        return(
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;