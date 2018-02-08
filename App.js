import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import ReduxPromisse from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const TituloSuperior = ( props ) => (
  <View style={styles.tituloSuperior} >
    <Text style={styles.textoTitulo} >Últimas Notícias</Text>
  </View>
)

const createStoreWithMiddleware = applyMiddleware( ReduxPromisse )( createStore );
const store = createStoreWithMiddleware( reducers );

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <View style={styles.container}>
           <TituloSuperior />
           <List />
        </View>  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  tituloSuperior: {
    backgroundColor: '#c4170c',
    padding: 15,
    width: '100%'
  },
  textoTitulo: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
});
