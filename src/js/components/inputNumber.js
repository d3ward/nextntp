/* ----------- inputNumber component ---------- */
//Used for: choosing number of tiles in the grid
export class inputNumber {
    constructor(selector, callback) {
        this.s = document.querySelector(selector)
        this.el = this.s.querySelector('input')
        this.min = this.el.getAttribute('min') || false
        this.max = this.el.getAttribute('max') || false
        this.dec = this.s.querySelector('.in-dec')
        this.inc = this.s.querySelector('.in-inc')
        this.dec.addEventListener('click', () => {
            this.decrement()
        })
        this.inc.addEventListener('click', () => {
            this.increment()
        })
        this.callback = callback
    }
    setValue(v) {
        this.el.value = v
    }
    decrement() {
        var v = this.el.value
        v--
        if (!this.min || v >= this.min) {
            this.el.value = v
            this.callback(v)
        }
    }
    increment() {
        var v = this.el.value
        v++
        if (!this.max || v <= this.max) {
            this.el.value = v
            this.callback(v)
        }
    }
}
