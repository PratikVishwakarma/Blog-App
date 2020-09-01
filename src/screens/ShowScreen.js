import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))
    return <View>
        <Text>Show Screen {blogPost.title}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('EditBlog', { id: navigation.getParam('id') }) }}>
                <Entypo style={{ fontSize: 20, margin: 8 }} name='edit' />
            </TouchableOpacity>
        )
    }
}


export default ShowScreen