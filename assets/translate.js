import Animate from "./Animate"
export default class Transalte extends Animate {
    constructor() {
        super()
    }

    static install() {
        return new Transalte();
    }

    // exec() {
    //     // this.animation(el)
    //     console.log(this.el)
    //     this.el.classList.add('content')
    // }

    // animation(el) {
    //     el.classList.add('content')
    //     const handleEventlister = function(e) {
    //         el.removeEventListener('animationstart', handleEventlister)
    //     }
    //     el.addEventListener('animationstart', handleEventlister)
    // }

    exec() {
        this.el.forEach(element => {
            this.out(element)
        });
    }
    out(el) {
        setTimeout(() => {
            el.classList.add('content');
        }, 20);
    }
}