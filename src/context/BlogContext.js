import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, action.payload]
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'edit_blogpost': {
            const blogIndex = state.findIndex(blog => blog.id === action.payload.id)
            const tempBlogArray = state
            tempBlogArray[blogIndex] = { ...tempBlogArray[blogIndex], title: action.payload.title, content: action.payload.content }
            return [...tempBlogArray]
        }
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

const editBlogPost = dispatch => {
    return (blog, callback) => {
        dispatch({ type: 'edit_blogpost', payload: blog })
        callback()
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    []
)