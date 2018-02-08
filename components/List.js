import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchPost } from '../actions';
import ListItem from './ListItem';


class List extends Component {
    constructor(props){
        super(props)

    }

    componentWillMount(){
        this.props.searchPost()
    }

    render(){
        if(!this.props.posts){
            return (
                <Text>Loading...</Text>
            );
        }
        console.log(this.props.posts)
        return(
            <ScrollView>
                 { this.props.posts.map( (elem, index) => {
                    return( <ListItem 
                     key={index} 
                     newsUrl={elem.url}  
                     newsImage={elem.urlToImage}
                     newsTitle={elem.title}  
                     newsDescription={elem.description} 
                  /> )
                 } )}
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


const mapStateToProps  = state => {
    return { posts: state.PostsReducer.posts };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({ searchPost }, dispatch)
};

export default connect( mapStateToProps, mapDispatchToProps )( List );