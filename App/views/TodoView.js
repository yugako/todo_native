import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoAdd from '../components/TodoAdd/TodoAdd';
import TodoItem from '../components/TodoItem';

import {connect} from 'react-redux';

function TodoView (props) {
    
    return (
        <View>
            <Text style={styles.title}>ToDo List</Text>
            <FlatList 
                keyExtractor={(item, index) => `${item.text}-${index}`} data={props.todos} 
                renderItem={({item}) => <TodoItem id={item.id} text={item.text} />} 
            />
            <TodoAdd />
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: '100',
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
    todos: state.todos,
  });

export default connect(mapStateToProps)(TodoView);