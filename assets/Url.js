export default class Url {
    constructor(props) {
        this.props = props;
        this.obj = {};
        this.strArr = [];
        this.exec();
    }


    exec() {
            if (Array.prototype.toString.call(this.props).slice(8, -1) == 'String') {
                this.urlSplit(this.props);
            } else {
                this.urlMerge(this.props);
            }
        }
        //分割字符串
    urlSplit(url) {
            let str = url.substring(url.indexOf('?') + 1);
            let keyArr = str.split("&");
            keyArr.forEach(item => {
                let aitem = item.split('=');
                this.obj[aitem[0]] = aitem[1];
            })
        }
        //合并对象
    urlMerge(props) {
        for (const key in props) {
            let str = key + '=' + props[key];
            this.strArr.push(str);
        }
    }


    get(name) {
        return this.obj[name];
    }
    parse() {
        return this.strArr.join('&')
    }
}