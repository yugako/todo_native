import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native';

import { connect } from 'react-redux';

import {todoAddStyles as styles} from './TodoAdd.styles';

function TodoAdd(props) {
    const [todo, setTodo] = useState({
        text: '',
        done: false,
        id: null
    });

    const addNewTodo = (todo) => {
        props.onAdd(todo);

        setTodo({
            text: ''
        })
    };

    return (
        <View>
            <TextInput 
                onChangeText={
                    text => setTodo(
                        {...todo, text, id: Math.floor(Math.random()*1e6 + 1)}
                    )
                } 
                style={styles.input} 
                placeholder="Type here to add new item!"
                value={todo.text}
            />
            <Button onPress={() => addNewTodo(todo)} style={styles.addButton} title='Add new to do' />
        </View>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        onAdd: payload => dispatch({type: 'ADD_TODO', payload})
    }
}

export default connect(null, mapDispatchToProps)(TodoAdd);