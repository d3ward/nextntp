/* -------------- Modal component ------------- */

export function modal(id) {
    var t = this
    t.m = document.querySelector(id ? id : '.modal')
    if (t.m) {
        t.bdy = document.body.classList
        t.targets = document.querySelectorAll('[data-toggle="' + t.m.id + '"]')
        t.closebtns = t.m.querySelectorAll('.close-modal')
    }
    t.toggle = () => {
        t.m.toggle('_show-modal')
        t.bdy.toggle('_overflowhidden')
    }
    t.show = function () {
        t.bdy.add('_overflowhidden')
        t.m.classList.add('_show-modal')
    }
    t.hide = function () {
        t.m.classList.remove('_show-modal')
        t.bdy.remove('_overflowhidden')
    }
    t.listeners = function () {
        t.targets.forEach((el) => {
            el.addEventListener('click', function (e) {
                t.show()
            })
        })
        t.closebtns.forEach(function (item) {
            item.addEventListener('click', function (e) {
                t.hide()
            })
        })
    }
    if (t.m) t.listeners()
}
