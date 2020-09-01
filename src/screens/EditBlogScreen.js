import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const EditBlogScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))

    return <BlogPostForm
        onSubmit={(blog) => {
            editBlogPost({ title: blog.title, content: blog.content, id: blogPost.id },
                () => { navigation.pop() })
        }}
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        isAdd={false}
    />
}

export default EditBlogScreen