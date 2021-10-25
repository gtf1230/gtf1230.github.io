export default class Opicity {
    constructor() {

    }

    static install() {
        return new Opicity();
    }


    exec(el) {
        this.animation(el)
    }

    animation(el) {
        el.classList.add('text-opacity')
        const handleEventlister = function() {
            el.removeEventListener('animationstart', handleEventlister)
        }
        el.addEventListener('animationstart', handleEventlister)
    }
}