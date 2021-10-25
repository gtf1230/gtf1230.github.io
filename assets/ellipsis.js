    /**
     * @description 截取字符串,超出...
     * @param el: 元素
     * @param textCount : 字符串截取长度 number类型;
     * @param findAllButtonText: 非必填项,默认为'查看全部'
     * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
     * **/


    export default class Ellipsis {
        constructor(props) {
            this.el = props.el;
            this.textCount = props.textCount;
            this.findAllButtonText = props.findAllButtonText || '查看全部';
            this.showFindAllButton = props.showFindAllButton;
        }


        exec() {
            console.log(this.el.innerHTML)
            if (this.el.innerHTML.length > this.textCount) {
                let str = this.el.innerHTML.substring(0, this.textCount);
                if (this.showFindAllButton) {
                    str = str + '...' + `<div class="view">${this.findAllButtonText}</div>`;
                } else {
                    str = str + '...'
                }
                console.log(str);
                return str;
            } else {
                return this.el.innerHTML
            }
        }
    }

    // let ellipsis = new Ellipsis({
    //     el: document.querySelector('.content'),
    //     textCount: 30,
    //     findAllButtonText: "查看所有",
    //     showFindAllButton: true
    // })

    // ellipsis.exec();