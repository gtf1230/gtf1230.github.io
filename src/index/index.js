import webpackConfig from '../../config/webpack.config.js'

class Webpack {
    constructor(props) {
        this.props = props
    }

    compile() {
        let { entry, output } = this.props
        let { filename, path } = output
        let [dir, file] = filename.split('/')
        if (Array.prototype.toString.call(entry).slice(8, -1) === 'Object') {
            for (const key in entry) {
                let dirname = entry[key]
                let num = Math.round(Math.random() * 899999999999 + 100000000000)
                console.log(`将${dirname}中的代码打包到${path}/${key}文件夹中文件名称叫${key}.${num}.js`);
            }
        } else {
            console.log(`将${entry}中的代码打包到${path}/${dir}/文件夹中，文件名称叫${file}`)
        }
    }
}

let webpack = new Webpack(webpackConfig);
webpack.compile()
    //作业： 页面输出：
    // 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫helloworld.js


//作业二 ：
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js

// 将./src/index/index.js中的代码打包到/docs/index/文件夹中，
//文件名称叫index.asdjfklasdfas.js