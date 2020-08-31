import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const ShowScreen = ({ navigation }) => {
    const blogPost = navigation.getParam('blogPost')
    return <View>
        <Text>Show Screen {blogPost.title}</Text>
    </View>
}

export default ShowScreen