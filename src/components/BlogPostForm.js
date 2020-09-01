import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues, isAdd }) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return <View style={styles.viewContainer}>
        <Text>{isAdd ? 'Create' : 'Edit'} Screen </Text>
        <Text style={styles.inputHeading}>{isAdd ? 'Add' : 'Edit'} Title:</Text>
        <TextInput
            style={styles.inputTextStyle}
            value={title}
            autoFocus={true}
            onChangeText={(title) => setTitle(title)}
        />

        <Text style={styles.inputHeading}>{isAdd ? 'Add' : 'Edit'} Content:</Text>
        <TextInput
            style={styles.inputTextStyle}
            value={content}
            onChangeText={(content) => setContent(content)}
        />


        {isAdd ? (
            <Button
                title='Add'
                onPress={() => {
                    onSubmit({ title, content, id: Math.floor(Math.random() * 99999) })
                }}
            />
        ) : (
                <Button
                    title='Edit'
                    onPress={() => {
                        onSubmit({ title, content })
                    }}
                />
            )}
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

export default BlogPostForm