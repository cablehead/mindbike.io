import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'mindbike.io',
  }),

  getRoutes: async () => {
    /*
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts')
    */

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/writing',
        component: 'src/containers/Writing',
      },
      /*
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      */
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },

  plugins: [
    ["react-static-plugin-google-analytics", {id: 'UA-127815006-2'}]
  ]
}
