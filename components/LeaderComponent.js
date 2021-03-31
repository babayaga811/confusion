import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, View, Text, FlatList,Image, StatusBar,SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';



class CorporateLeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            leaders: LEADERS
        };

        
    }

    
    
    render() {

        

        const renderLeaderItem = ({item, index}) => {

            return (
    
                <View style={styles.bigbox}>
                    
                    <View style={{flex: 1, borderRadius: 10, 
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignSelf: 'center'}} >
                    {/* <TouchableOpacity onPress={()=> navigate('Dishdetail', {dishId: item.id})}> */}
    
                    <Image style={styles.image} 
                    source={require('./images/alberto.png')}
    
                    />
                    {/* </TouchableOpacity> */}
                    </View>
            
                    <View style={{flex: 5, borderRadius: 10, backgroundColor: 'green',
                      justifyContent:'space-evenly', marginTop: 2,marginBottom: 2,}}> 
                        <Text style={{backgroundColor: 'green',padding: 3, color:'white', fontWeight: 'bold'}}>{item.name} </Text>
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
        <ScrollView style= {{flex:1}}>
            <Card style= {{flex:1}}>
                <Card.Title>Our History</Card.Title>
                <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.   
            With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list
            clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what 
            will arrive on your plate the next time you visit us.The restaurant traces its humble beginnings to The Frying 
            Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best 
            cuisines in a pan.
                </Text>
            </Card>
            <View style= {{flex:1}}> 
                <FlatList
                // horizontal= {true}
                data={this.state.leaders}
                // horizontal = {true}
                renderItem={renderLeaderItem}
                keyExtractor={item => item.id.toString()}
                // horizontal= {true}
                />
            </View> 
        </ScrollView>
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

export default CorporateLeader;