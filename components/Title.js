import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ children }) => {
    return <View style={styles.title}><Text style={styles.title_text}>{children}</Text></View>;
};

const styles = StyleSheet.create({
    title: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600',
        width: 320,
        padding:8,
        marginTop:20,
        borderWidth: 2,
        backgroundColor:'#6767AE',
        color:'#fff',
        textAlign:'center',
    },
});

export default Title;