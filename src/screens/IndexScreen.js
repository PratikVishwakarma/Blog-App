import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'
const IndexScreen = () => {
    const { blogs, addBlogPost } = useContext(BlogContext)
    console.log(blogs)
    return <View style={{ flex: 1 }}>
        <Text>Index Screen</Text>
        <FlatList
            style={{ flex: 1 }}
            data={blogs}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
        <Button
            title='Add Blog'
            onPress={() => {
                addBlogPost({ title: `Blog #${blogs.length + 1}`, key: `${blogs.length + 1}` })
            }
            }
        />
    </View>
}

const styles = StyleSheet.create({

})

export default IndexScreen