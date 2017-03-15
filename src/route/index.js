// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Home = {
//     template: '<div>Home</div>'
// }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
export const routes = [
    {
        path: '/',
        components: {
            default: resolve => {
                require(['../view/foo.vue'], resolve);
            },
            a: resolve => {
                require(['../view/bar.vue'], resolve);
            },
            b: resolve => {
                require(['../view/home.vue'], resolve);
            }
        }
    },
    {
        path: '/foo',
        name: 'foo',
        component: resolve => {
            require(['../view/foo.vue'], resolve);
        }
    },
    {
        path: '/bar',
        component: resolve => {
            require(['../view/bar.vue'], resolve);
        }
    },
    // 动态路径参数 以冒号开头
    {
        // 以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
        path: '/user/:id',
        component: resolve => {
            require(['../view/user.vue'], resolve);
        },
        children: [
            {
                // 当 /user/:id 匹配成功，
                // Home 会被渲染在 User 的 <router-view> 中
                path: '',
                component: resolve => {
                    require(['../view/home.vue'], resolve);
                }
            }
            // {
            //   // 当 /user/:id/profile 匹配成功，
            //   // UserProfile 会被渲染在 User 的 <router-view> 中
            //   path: 'profile',
            //   component: UserProfile
            // }
        ]
    }
]
