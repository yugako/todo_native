
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {connect} from 'react-redux';

function TodoItem(props) {

    return (
        <View style={styles.container}>
            <CheckBox />
            <Text style={styles.item}>{props.text}</Text>
            <Text onPress={() => props.onRemove(props.id)} style={styles.close}>&times;</Text>
        </View>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onRemove: payload => dispatch({type: 'REMOVE_TODO', payload})
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    item: {
        fontWeight: '100',
        textAlign: 'left',
        position: 'relative'
    },
    close: {
        
    }
});

export default connect(null, mapDispatchToProps)(TodoItem);
