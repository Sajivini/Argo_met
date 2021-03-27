import React, { Component } from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import Tflite from 'tflite-react-native'

const modelFile = 'models/model.tflite';
const labelFile = 'models/labels.txt';

let Tflite = new Tflite();

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:false
        }
        Tflite.loadModel({
            model: modelFile,
            label : labelFile
        }, (err, res) => {
            if (err) console.log(err);
            else console.log(res);
        })
        
    }

    incrementCount = () => {
        const { count } = this.state;
        this.setState({count : count + 1})
    }

    render() {
        return (
            <View containerStyle={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <View style={styles.TitleContainer}>
                    <Text style={styles.fontStyle}>Agro-Met</Text>
                </View>
                <View style={styles.Container}>
                    <View>
                        <Button containerStyle={{marginBottom : 25}} title='Advisory'></Button>
                    </View>
                    <View>
                        <Button containerStyle={{marginBottom : 25}} title='Water Tank Availability'></Button>
                    </View>
                    <View>
                        <Button containerStyle={{marginBottom : 25}} title='RainFall Analysis'></Button>
                    </View>
                    <View>
                        <Button title='Saji Button'></Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    TitleContainer: {
        marginTop: 20,  
        alignItems: 'center',
        marginBottom:20
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