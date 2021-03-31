import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES} from '../shared/dishes';


function RenderDish(props){

    
    const dish = props.dish;

    if (dish!=null){
        return(
            <Card>
                <Card.Image source={require('./images/uthappizza.png')}
                            style={{justifyContent:'center'}}>
                    <Card.Title style={{color:'white'}}>{dish.name}</Card.Title>  
                </Card.Image>   
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else{
        console.log('yo');
        return(<View></View>)
    }
}


class Dishdetail extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes: DISHES
        };
        
    }


    static navigationOptions = {
        title:'Dish Details',

    };

    

    render() {

        const dishId = this.props.route.params;
        var asdf = JSON.stringify(dishId.dishId);
        var bla = this.state.dishes[asdf];

        return(
        <RenderDish dish={bla}/>
        );
        
    }

}

export default Dishdetail;