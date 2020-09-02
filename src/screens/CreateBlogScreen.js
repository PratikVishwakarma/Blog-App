import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateBlogScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context)
    return <BlogPostForm
        onSubmit={(blog) => {
            addBlogPost({ title: blog.title, content: blog.content, id: blog.id },
                () => { navigation.pop() })
        }}
        initialValues={{ title: '', content: '' }}
        isAdd={true}
    />
}

export default CreateBlogScreen