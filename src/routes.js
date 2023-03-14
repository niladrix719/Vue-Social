import {createWebHistory,createRouter} from 'vue-router'
import UserList from './components/UserList.vue'
import PostList from './components/PostList.vue'

const routes=[
    {
        name : 'Home',
        path: '/',
        component: UserList
    },
    {
        name : 'PostList',
        path: '/post-list',
        component: PostList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;