import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Linking, Image } from 'react-native';

const ListItem = props => (

    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(props.newsUrl)}>
        <Image style={{ width: '100%', height: 200 }} source={{ uri: props.newsImage }} />
        <View style={{ padding: 20, paddingTop: 30, paddingBottom: 30 }}>
            <Text style={styles.textoT}>{ props.newsTitle }</Text>
            <Text style={styles.texto}>{ props.newsDescription }</Text>
        </View>
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({
    textoT: {
        fontSize: 20,
        color: "#000",
        textAlign: 'center'
    },
    texto: {
        fontSize: 16,
        padding: 15,
        textAlign: 'center'
    },
    card:{
        backgroundColor: "#fff",
        flex: 1,
        margin: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    }
})

export default ListItem;