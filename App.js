import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateBlogScreen from './src/screens/CreateBlogScreen'
import EditBlogScreen from './src/screens/EditBlogScreen'


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    CreateBlog: CreateBlogScreen,
    EditBlog: EditBlogScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  })

const App = createAppContainer(navigator)

export default () => {
  return <Provider>
    <App />
  </Provider>
} 