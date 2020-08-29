import React, { useReducer } from 'react'

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, action.payload]
        default: return state
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, [])

    const addBlogPost = (blog) => {
        return dispatch({ type: 'add_blogpost', payload: blog })
    }
    return <BlogContext.Provider value={{ blogs: blogPosts, addBlogPost: addBlogPost }}>{children}</BlogContext.Provider>
}

export default BlogContext