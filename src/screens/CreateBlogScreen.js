import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'


const CreateBlogScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return <View style={styles.viewContainer}>
        <Text>Create Screen </Text>
        <Text style={styles.inputHeading}>Enter Title:</Text>
        <TextInput
            style={styles.inputTextStyle}
            value={title}
            onChangeText={(title) => setTitle(title)}
        />

        <Text style={styles.inputHeading}>Enter Content:</Text>
        <TextInput
            style={styles.inputTextStyle}
            value={content}
            onChangeText={(content) => setContent(content)}
        />

        <Button
            title='Save'
            onPress={() => {
                addBlogPost({ title, content, id: Math.floor(Math.random() * 99999) },
                    () => { navigation.navigate('Index') })
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: 'white',
        padding: 16,
        flex: 1
    },
    inputHeading: {
        fontSize: 20
    },
    inputTextStyle: {
        padding: 8,
        marginVertical: 8,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20
    }
})

export default CreateBlogScreen