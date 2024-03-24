import A11yDialog from 'a11y-dialog'
import '../sass/themes.sass'
import { themeManager } from './components/themeManager'
import { navbar } from './components/navbar'
import { aos } from './components/aos'
import { gotop } from './components/gotop'
import { BottomSheet } from './components/bottomsheet'
import { getEventListeners } from './components/utilities'
import data from '../data/themes.json'
var ev_li = getEventListeners()
const bottomSheet = new BottomSheet('#pt', {
    threshold: 50,
    eventMap: ev_li
})

function getPreview(id) {
    const cnt = document.getElementById('pt_cnt')
    var html = ''

    if (data.hasOwnProperty(id)) {
        const item = data[id]
        var cr = ''
        if (item.credits)
            cr +=
                '<div>Credits : <a href="' +
                item.credits +
                '" target="_blank">' +
                item.credits +
                '</a></div>'
        var ot = ''
        if (item.onetheme) ot += '<div><span>Light & Dark Theme</span></div>'
        else ot += '<div><span>Light Theme</span><span>Dark Theme</span></div>'
        html +=
            '<div class="card _aos-bottom">' +
            '<div class="pi"><img src="./themes/' +
            id +
            '-p.png">' +
            ot +
            '</div>' +
            '<div><span><b>' +
            item.title +
            '</b></span><span> by ' +
            item.author +
            '</span></div>' +
            '<p>' +
            item.description +
            '</p>' +
            cr +
            '<div class="col-2">' +
            '<a class="btn btn-p" href="./themes/' +
            id +
            '.json" download="' +
            id +
            '.json"' +
            '"><svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> Download</a>' +
            '</div></div>'
    }

    cnt.innerHTML = html
}
function previewListener() {
    document.querySelectorAll('.preview-btn').forEach((p) => {
        p.addEventListener('click', () => {
            getPreview(p.getAttribute('data-id'))
            bottomSheet.show()
        })
    })
    //
    //var img = '<img class="_fit-cover" src="./src/img/' +item.preview + '">'
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dialog_support = new A11yDialog(
        document.querySelector('#dlg_support')
    )
    themeManager()
    aos()
    new navbar()
    new gotop()
    previewListener()
})
