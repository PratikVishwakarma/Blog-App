import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload
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

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogPost')
        console.log('GET API called')
        dispatch({ type: 'get_blogpost', payload: response.data })
    }
}

const addBlogPost = dispatch => {
    return async (blog, callback) => {
        await jsonServer.post('/blogPost', { title: blog.title, content: blog.content })
        // dispatch({ type: 'add_blogpost', payload: blog })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogPost/${id}`)
        // dispatch({ type: 'delete_blogpost', payload: id })
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
    { getBlogPost, addBlogPost, deleteBlogPost, editBlogPost },
    []
)