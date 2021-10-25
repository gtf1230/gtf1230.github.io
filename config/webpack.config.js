// export default {
//     entry: './src/home/index.js',
//     output: {
//         filename: 'home/helloworld.js',
//         path: '/docs'
//     }
// }

export default {
    entry: {
        home: './src/home/home.js',
        index: './src/index/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: '/docs'
    }
}