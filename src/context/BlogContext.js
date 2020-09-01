import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, action.payload]
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'edit_blogpost': {
            return state.map((blog) => {
                return blog.id === action.payload.id ? action.payload : blog
            })
        }
        default: return state
    }
}

const addBlogPost = dispatch => {
    return (blog, callback) => {
        dispatch({ type: 'add_blogpost', payload: blog })
        if (callback) {
            callback()
        }
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
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Test Title', content: 'Test Content', id: 1 }]
)