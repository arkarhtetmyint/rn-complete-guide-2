import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#52006A',
    }
});

export default Card;