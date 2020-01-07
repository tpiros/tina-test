// const glob = require('glob')

// module.exports = ({
//   exportPathMap: async function() {
//     const routes = {
//       '/': { page : '/'},
//     }
//     const blogs = glob.sync('posts/*.json')

//     const blogSlugs = blogs.map(file => file.split('/')[1].replace(/ /g, '-').slice(0).trim())
//     console.log('blogs', blogs);
//     console.log('blogslugs', blogSlugs);

    
//     blogSlugs.forEach(blog => {
//       routes[`/${blog}`] = { page: '/[slug]', query: { slug: blog } };
//     });

//     console.log(routes)
  
//     return routes
//   }
// });