import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
const IndexScreen = ({ navigation }) => {

    const { state, getBlogPost, deleteBlogPost } = useContext(Context)
    useEffect(() => {
        getBlogPost()

        // to call the getBlogPost function whenever the index  screen reapier on device
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost()
        })

        return () => {
            listener.remove()
        }
    }, [])

    return <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <Text>Index Screen</Text>
        <FlatList
            style={{ flex: 1 }}
            data={state}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate('Show', { id: item.id })
                }}>
                    <View style={styles.itemView}>
                        <View>
                            <Text style={styles.textStyle}>{item.title} : {item.id}</Text>
                            <Text style={styles.textStyle}>{item.content}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                            <Feather style={styles.iconStyle} name='trash' />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
    </View>
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('CreateBlog') }}>
                <Feather style={{ fontSize: 30 }} name='plus' />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderWidth: 1,
        borderColor: 'gray'
    },
    textStyle: {
        fontSize: 16
    },
    iconStyle: {
        fontSize: 24
    }
})

export default IndexScreen