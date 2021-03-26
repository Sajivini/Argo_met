import React, { Component } from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        }
    }

    incrementCount = () => {
        const { count } = this.state;
        this.setState({count : count + 1})
    }

    render() {
        return (
            <View style={styles.Container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    TitleContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    fontStyle: {
        fontSize: 30,
    },
    btnContainer: {
        alignItems: 'center',
        paddingBottom : 40
    },
    btn: {
        width: 200,
        height: 47,
        backgroundColor: 'black',
        borderRadius:8
    },
    outputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    },
    ouput: {
        fontSize : 30
    }

})