import './Ani.css'
export default class Ani {
    constructor(props) {
        this.props = props
        this.count = props.count || 1
        this.reverse = props.reverse || false;
        this.exec()
    }

    exec() {
        let newtargets = this.props.targets.slice();
        this.animation(newtargets)
    }

    //判断当前是第几轮动画；
    get curIndex() {
        return this.props.count - this.count + 1;
    }


    getTarget(newtargets) {
        let res;
        if (Array.isArray(this.reverse) && this.reverse.includes(this.curIndex)) {
            res = newtargets.pop();
        } else if (this.reverse === true) {
            res = newtargets.pop();
        } else {
            res = newtargets.shift();
        }
        return res;
    }

    animation(newtargets) {
        let _this = this;
        if (!newtargets.length) {
            if (this.count > 1) {
                this.count--
                    setTimeout(function() {
                        _this.exec()
                    })
            }
            return
        }
        let item = this.getTarget(newtargets);
        item.el.classList.add(item.animationClassName)
        const handleEventlister = function(e) {
            if (_this.count != 1) {
                item.el.classList.remove(item.animationClassName);
            }
            _this.animation(newtargets);
            e.target.removeEventListener('animationend', handleEventlister)
        }
        item.el.addEventListener('animationend', handleEventlister)

    }
}