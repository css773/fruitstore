import React from 'react'
import {Text,View} from 'react-native'

export default class AuthorScreen extends React.Component{
    render(){
        return (
            <View style={styles.con}>
                <Text style={styles.text}>TEL：xxxxxxxx</Text>
            </View>
        )
    }
}
const styles = {
    con: {
        height: 26,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        includeFontPadding: false,
        textAlignVertical: 'center',
    }
};
