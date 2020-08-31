import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, action.payload]
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default: return state
    }
}

const addBlogPost = dispatch => {
    return (blog, callback) => {
        dispatch({ type: 'add_blogpost', payload: blog })
        callback()
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
)