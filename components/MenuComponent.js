import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, FlatList,Image, StatusBar } from 'react-native';
import { DISHES } from '../shared/dishes';


class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        };

        // const{navigation}=this.props;
    }

    static navigationOptions = {
        title:'Menu',

    };


    
    render() {

        const { navigate } = this.props.navigation;

        const renderMenuItem = ({item, index}) => {

            return (
    
                <View style={styles.bigbox}>
                    
                    <View style={{flex: 1, borderRadius: 10, 
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignSelf: 'center'}} >
                    <TouchableOpacity onPress={()=> navigate('Dishdetail', {dishId: item.id})}>
    
                    <Image style={styles.image} 
                    source={require('./images/uthappizza.png')}
    
                    />
                    </TouchableOpacity>
                    </View>
            
                    <View style={{flex: 5, borderRadius: 10, backgroundColor: 'green',
                      justifyContent:'space-evenly', marginTop: 2,marginBottom: 2,}}> 
                        <Text style={{backgroundColor: 'green',padding: 3, color:'white'}}>{item.name} </Text>
                        <Text style={{backgroundColor: 'green',padding: 2}}>{item.description}</Text>
                    </View>
              
                    <View style={{flex: 0.2, borderRadius: 10, 
                    backgroundColor: '#b1b951',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignSelf: 'center'}}>
                    </View>
            
                </View>
                    
            );
        };

    
        return (
        
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
       
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    bigbox:{

        flex:1,
        flexDirection: 'row',
        marginTop:20,
        marginHorizontal:'5%',
        borderRadius: 10,
        backgroundColor: 'green',
        
        // width: '80%',
      },
      title: {
        marginHorizontal:'10%',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 2,
      },
      
      box:{  
      marginTop: 25,
      marginBottom: 5,
      marginHorizontal:'10%',
      paddingVertical: 5,
      alignItems: 'center',
      borderRadius: 3,
      backgroundColor: "grey",
      width: '80%',
      },
    
      image: {
        width: 45,
        height: 45,
        borderRadius: 3,
      },
  });

export default Menu;