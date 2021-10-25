export default class Animate {
    constructor() {
        // this.el = target.el
        // this.model = target.model
        // this.model.exec(this.el)
        // this.type = target.type
        this.el = Animate.el
    }

    static create() {
        return new Animate();
    }
    static model;

    use(instance) {
        try {
            Animate.model = instance.install;
        } catch (error) {
            Animate.model = instance
        }
        return this;
    }

    mount(el) {
        Animate.el = el
        Animate.model().exec();
        // this.load(el)
    }
    static el


    // emit(motion) {
    //     this.el.addEventListener(motion, function(e) {
    //         e.target.classList.remove(this.el);
    //     })
    // }

    // load(el) {
    //     let obj = {
    //         'translate': new Transalte(),
    //         'opicity': new Opicity()
    //     }
    //     obj[this.type].exec(el)
    // }

}