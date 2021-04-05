import React, { Component } from 'react';
import { View, Text,Image,ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';



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
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart': 'heart-o'}
                    type='font-awesome'
                    color="#f50"
                    onPress={() => props.favorite  ? 
                    console.log('Already Favorite'): props.onPress()}/>
            </Card>
        );
    }
    else{
        console.log('yo');
        return(<View></View>)
    }
}

function RenderComments(props){

    const comment= props.comments;

    const renderCommentsItem = ({item,index}) => {
        console.log("--------------near render comment item------------------------\n" + item.comment);
        return(
            <View key={index} style={{margin:10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'---' + item.author 
                                            + ',' + item.date}</Text>
            </View>
        )
    }

    return(
        <Card>
            <Card.Title>Comments</Card.Title>
            <FlatList
                data={comment}
                renderItem={renderCommentsItem}
                keyExtractor={item => item.id}/>
        </Card>
    )
}
class Dishdetail extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes: DISHES,
            comments: COMMENTS,
            favorites: []
        };
        
    }

    markFavorite(dishId){
        this.setState({ favorites: this.state.favorites.concat(dishId)})
    }

    static navigationOptions = {
        title:'Dish Details',

    };

    

    render() {

        const dishId = this.props.route.params;
        // console.log(dishId);
        var asdf = JSON.stringify(dishId.dishId);
        var bla = this.state.dishes[asdf];

        return(
            <ScrollView>
                <RenderDish dish={bla}
                favorite={this.state.favorites.some(el =>el === dishId)}
                onPress={() => this.markFavorite(dishId)}/>
                <RenderComments comments= {this.state.comments.filter(comm => comm.dishId == dishId.dishId)}/>
            </ScrollView>
        );
        
    }

}

export default Dishdetail;