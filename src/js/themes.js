import A11yDialog from 'a11y-dialog'
import '../sass/themes.sass'
import { themeManager } from './components/themeManager'
import { navbar } from './components/navbar'
import { aos } from './components/aos'
import { gotop } from './components/gotop'
import data from '../themes/themes.json'

function createItems() {
    var gi = document.getElementById('themeItems')
    console.log(data)
    var html = ''
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const item = data[key]
            html += '<div class="col-4">'
            html +=
                '<div class="card _aos-bottom">' +
                '<img class="_fit-cover" src="./src/img/' +
                item.preview +
                '">' +
                '<div><span><b>' +
                item.title +
                '</b></span><span> by ' +
                item.author +
                '</span></div>' +
                '<p>' +
                item.description +
                '</p>' +
                '<button><svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg> Preview</button>' +
                '<a class="btn" href="' +
                item.file +
                '"><svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> Download</a>' +
                '</div></div>'
        }
    }
    gi.innerHTML = html
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    themeManager()
    aos()
    new navbar()
    new gotop()
    createItems()
    const waveH = document.querySelector('.wave._float-top').getBoundingClientRect()
    console.log(waveH)
    document.addEventListener('scroll', () => {
        const navbar = document.querySelector('#h-nav')
        if (window.scrollY > waveH.height - 70) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    })
})
