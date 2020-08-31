import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const blogPost = navigation.getParam('blogPost')
    return <View>
        <Text>Show Screen {blogPost.title}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    const blogPost = navigation.getParam('blogPost')
    return {
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('EditBlog', { blogPost: blogPost }) }}>
                <Entypo style={{ fontSize: 30 }} name='edit' />
            </TouchableOpacity>
        )
    }
}


export default ShowScreen