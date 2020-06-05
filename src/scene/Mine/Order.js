import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import theme from '../../common/color'
import Line from './Line'

const subList = [
    {
        title: '待付款',
        image: require('../../img/sale.png')
    },
    {
        title: '待发货',
        image: require('../../img/need.png')
    },
    {
        title: '待收货',
        image: require('../../img/pay.png')
    },
    {
        title: '待评价',
        image: require('../../img/review.png')
    }]

const Order = (props) => {
    return (
        <View style={[styles.container,props.style]}>
            <Line onPress={()=> goOrderScreen(props)} title={'我的订单'} subtitle={'查看详情'}/>
            <Line title={'我的收货地址'} subtitle={'查看'}/>
            <Line onPress={()=>{goAuthorScreen(props)}} title={'联系我们'} subtitle={'☎'}/>
            <Line title={'关于'} subtitle={'版本: 1.0'}/>

        </View>
    )
}

const goOrderScreen = (props) => {
    props.navigation.navigate('OrderScreen',{})
}
const goAuthorScreen = (props) =>{
    props.navigation.navigate('AuthorScreen',{})
}
 
const styles = {
    container: {
        flexDirection: 'column'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
    img: {
        height: 40,
        width: 40
    }
}

export default Order;