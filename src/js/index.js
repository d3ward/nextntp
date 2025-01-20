import Sortable from 'sortablejs'
import Croppie from 'croppie'
import Picker from 'vanilla-picker'
import A11yDialog from 'a11y-dialog'
import '../sass/index.sass'
import { se_data } from './components/se_data'
import { toast } from './components/toast'
import { pagesRoute } from './components/pagesRoute'
import {
    get_root_domain,
    fixURL,
    is_td,
    is_incognito,
    preconnectTo,
    reset_page,
    ls_get,
    ls_set,
    random_gradient,
    getNewsServer,
    wait,
    f_dwdg
} from './components/utilities'
var newsServer = getNewsServer(),
    ntp_theme,
    ntp_bdy = document.body,
    pages = new pagesRoute(),
    needReload = false
const ch_dialog = new A11yDialog(document.querySelector('#dlg_changelog'))
//Save user preferences for theme
function save_ntpbdy() {
    try {
        localStorage.ntp_bdy = ntp_bdy.getAttribute('style')
    } catch (err) {
        ntoast.error('Something gone wrong ! Info _:' + err.message)
    }
}
//Get cached ntp_bdystyle
ntp_bdy.style.setProperty('--bg-img-l', "url('../assets/nextntpbg.svg')")
ntp_bdy.style.setProperty('--bg-img-d', "url('../assets/nextntpbg_d.svg')")
if (localStorage.ntp_bdy != undefined)
    ntp_bdy.setAttribute('style', localStorage.ntp_bdy.replace('"', ''))

const dlg_color_picker = new A11yDialog(document.querySelector('#dlg_clvn'))
const dlg_st = new A11yDialog(document.querySelector('#dlg_st'))
const dlg_sb = new A11yDialog(document.querySelector('#dlg_sb'))
const lrt_fl = new A11yDialog(document.querySelector('#lrt_fl'))
const dlg_new_tf = new A11yDialog(document.querySelector('#dlg_new_tf'))

lrt_fl.on('show', () => (document.documentElement.style.overflowY = 'hidden'))
lrt_fl.on('hide', () => (document.documentElement.style.overflowY = ''))
dlg_st.on('show', () => (document.documentElement.style.overflowY = 'hidden'))
dlg_st.on('hide', () => {
    document.documentElement.style.overflowY = ''
    if (needReload) window.location.reload()
    pages.navigate('#p-home')
})

//Load Meta Theme Color
var metaTColor = document.querySelector('meta[name=theme-color]')
var mtc
try {
    mtc = ls_get('ntp_mtc')
    if (mtc == undefined || mtc.light == undefined || mtc.dark == undefined) {
        mtc = { light: '#4ca3e2', dark: '#4ca3e2' }
        ls_set('ntp_mtc', mtc)
    }
} catch {
    mtc = {
        light: '#4ca3e2',
        dark: '#4ca3e2'
    }
    ls_set('ntp_mtc', mtc)
}
//Set floating menu listeners
document.getElementById('btn-res').addEventListener('click', reset_page)
document.getElementById('fb-res').addEventListener('click', reset_page)
document.getElementById('fb-eg').addEventListener('click', () => {
    document.getElementById('flt_btn').classList.toggle('open')
})
//Setup code executer
const code_f = document.getElementById('code_f')
function f_codef_e() {
    try {
        eval(code_f.value)
        code_f.value = ''
    } catch (error) {
        alert('Something gone wrong ! Info _:' + error.message)
    }
}
document.getElementById('b_codec').addEventListener('click', () => {
    code_f.value = ''
})
document.getElementById('b_codee').addEventListener('click', f_codef_e)

const safeData = [
    'ntp_sett',
    'ntp_sb',
    'newsLe',
    'ntp_wdg',
    'ntp_theme',
    'ntp_bdy',
    'ntp_mtc'
]
const safeDataT = ['ntp_theme', 'ntp_bdy', 'ntp_mtc']
//Function to export NTP settings and widgets
document.getElementById('export-data').onclick = function () {
    //Create a copy of localstorage
    var dataStr = {}
    Object.keys(localStorage).forEach((key) => {
        if (safeData.includes(key)) {
            console.log(key)
            dataStr[key] = localStorage[key]
        }
    })
    var dataUri =
        'data:application/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(dataStr))
    var date = new Date()
    var exportFileDefaultName =
        'ntpB_' +
        date.getUTCFullYear() +
        '' +
        (date.getUTCMonth() + 1) +
        '' +
        date.getUTCDate() +
        '_' +
        date.getHours() +
        '_' +
        date.getMinutes() +
        '.json'
    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
}
//Function to export NTP settings and widgets
document.getElementById('export-theme').onclick = function () {
    //Create a copy of localstorage
    var dataStr = {}
    Object.keys(localStorage).forEach((key) => {
        if (safeDataT.includes(key)) {
            console.log(key)
            dataStr[key] = ls_get(key)
        }
    })
    var dataUri =
        'data:application/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(dataStr))
    var date = new Date()
    var exportFileDefaultName =
        'nextntp_theme' +
        date.getUTCFullYear() +
        '' +
        (date.getUTCMonth() + 1) +
        '' +
        date.getUTCDate() +
        '_' +
        date.getHours() +
        '_' +
        date.getMinutes() +
        '.json'
    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
}
//Import NTP settings and widgets
//Function to import NTP settings and widgets
document.getElementById('import-data').onchange = function () {
    var file = this.files[0]
    var reader = new FileReader()
    reader.onload = function (progressEvent) {
        var str = this.result
        console.log(localStorage)
        localStorage.clear()
        var data = JSON.parse(str)
        Object.keys(data).forEach((key) => {
            if (safeData.includes(key)) console.log(key)
            else delete data[key]
        })

        Object.assign(localStorage, data)
        console.log(localStorage)
        localStorage.ntp_ver = ntp_ver
        location.reload()
    }
    reader.readAsText(file)
}
document.getElementById('import-theme').onchange = function () {
    var file = this.files[0]
    var reader = new FileReader()
    reader.onload = function (progressEvent) {
        var str = this.result
        var data = JSON.parse(str)
        Object.keys(data).forEach((key) => {
            if (safeDataT.includes(key)) console.log(key)
            else delete data[key]
        })
        console.log(data)
        Object.assign(localStorage, data)
        console.log(localStorage)
        localStorage.ntp_ver = ntp_ver
        location.reload()
    }
    reader.readAsText(file)
}
//Theme for settings
function theme() {
    var toggles = document.getElementsByClassName('theme-toggle')
    if (window.CSS && CSS.supports('color', 'var(--bg)') && toggles) {
        var storedTheme =
            ls_get('ntp_theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light')
        document.getElementById('sett_mtcl').style.background = mtc.light
        document.getElementById('sett_mtcd').style.background = mtc.dark
        if (storedTheme) document.body.setAttribute('data-theme', storedTheme)
        if (storedTheme === 'light')
            metaTColor.setAttribute('content', mtc.light)
        else metaTColor.setAttribute('content', mtc.dark)
        ntp_theme = storedTheme
        for (var i = 0; i < toggles.length; i++) {
            toggles[i].onclick = function () {
                var cTheme = document.body.getAttribute('data-theme')
                var tTheme
                if (cTheme === 'light') {
                    tTheme = 'dark'
                    metaTColor.setAttribute('content', mtc.dark)
                    wllp_value.value =
                        getComputedStyle(ntp_bdy).getPropertyValue('--bg-img-d')
                } else {
                    tTheme = 'light'
                    metaTColor.setAttribute('content', mtc.light)
                    wllp_value.value =
                        getComputedStyle(ntp_bdy).getPropertyValue('--bg-img-l')
                }
                ntp_theme = tTheme
                document.body.setAttribute('data-theme', tTheme)
                ls_set('ntp_theme', tTheme)
            }
        }
    }
}
const isTD = is_td()
var mLstnr = !isTD
    ? ['mousemove', 'mouseup', 'mousedown']
    : ['touchmove', 'touchend', 'touchstart']

if (is_incognito()) {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = '#000'
    document.getElementById('incognito').style.display = 'inline'
    document.getElementById('ntp_cnt').style.display = 'none'
} else {
    var ntp_ver = __VERSION__
    var orderListChanged = 0
    document.getElementById('vLabel').innerText = 'NextNTP v' + ntp_ver
    const dialog_support = new A11yDialog(
        document.querySelector('#dlg_support')
    )
    theme()
    console.log('Version:', ntp_ver)

    //Check ntp_ver and show changelog
    if (localStorage.ntp_ver != ntp_ver || !localStorage.ntp_ver) {
        //Show changelog
        ch_dialog.show()
        //localStorage.clear()
        localStorage.ntp_ver = ntp_ver
    }

    /* ---------------- Toast Alert --------------- */
    var ntoast = new toast({
        timeout: 2000
    })
    //Get cached widgets
    var ntp_wdg = ls_get('ntp_wdg')
    if (ntp_wdg == undefined) {
        console.log('Create default cached widgets... ')
        ntp_wdg = [
            {
                name: 'Search Bar',
                cached: f_dwdg(0)
            },
            {
                name: 'Tiles Grid',
                cached: f_dwdg(1)
            },
            {
                name: 'News Section',
                cached: f_dwdg(2)
            }
        ]
        ls_set('ntp_wdg', ntp_wdg)
    }
    //Get cached settings
    var ntp_sett = ls_get('ntp_sett')
    if (ntp_sett == undefined) {
        console.log("ntp_sett is undefined , let's create default one")
        ntp_sett = {
            //Widgets
            order: [0, 1, 2],
            status: [1, 1, 1]
        }
        ls_set('ntp_sett', ntp_sett)
    }
    //Load widgets from cache
    function load_widgets() {
        let list = document.getElementById('stt_lwo').querySelectorAll('li')
        for (let z = 0; z < 3; z++) {
            let y = ntp_sett.order[z]
            let status = ntp_sett.status[z]
            let wdgn = document.getElementById('wdg_' + y)
            let c = ''
            if (status) {
                wdgn.style.display = 'block'
                c = 'checked'
                if (ntp_wdg[z].name == 'Search Bar') wdgn.style.zIndex = '1'
                wdgn.innerHTML = ntp_wdg[z].cached
            } else {
                wdgn.style.display = 'none'
                wdgn.innerHTML = '...'
            }
            if (orderListChanged == 0) {
                list[y].setAttribute('data-order', z)
                list[y].innerHTML =
                    '<svg class="stt_lwoh" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"/><path d="M4 10h16M4 14h16M9 18l3 3 3-3M9 6l3-3 3 3"/></svg>' +
                    ntp_wdg[z].name +
                    '</label><input ' +
                    'class="toggle" type="checkbox" id="tgw_' +
                    y +
                    '" ' +
                    c +
                    '/>'

                document.getElementById('tgw_' + y).onchange = () => {
                    toggle_widget(y)
                }
            }
        }
        let paras = document.getElementsByClassName('editMode')
        while (paras[0]) paras[0].parentNode.removeChild(paras[0])
    }
    //Load cached widget
    load_widgets()
    //Config Settings page

    var targetBlank = getComputedStyle(ntp_bdy).getPropertyValue('--o2')
    var disableAnimations = getComputedStyle(ntp_bdy).getPropertyValue('--o7')

    //Load settings option status and value
    for (var i = 0; i < 8; i++) {
        var a = document.getElementById('stt_opt' + i)
        var b = getComputedStyle(ntp_bdy).getPropertyValue('--o' + i)
        if (i == 2) {
            var ar = document.getElementsByClassName('tile_target')
            for (var z = 0; z < ar.length; z++) ar[z].target = b
        }
        if (i == 7) {
            console.log(disableAnimations)
            if (disableAnimations.toString() == 'true')
                document.documentElement.classList.add('no-animations')
            else document.documentElement.classList.remove('no-animations')
        }
        if (f_trim(a.value.toString()) == f_trim(b.toString())) a.checked = true
        else a.checked = false
    }
    ntp_bdy.classList.remove('op')
    //Function to set options with toggle
    function set_option_t(t, f, i) {
        //console.log('status :' +t.checked +' value : ' +t.value +' if false : ' +f +', index ' +i)
        var value = t.checked ? t.value : f
        ntp_bdy.style.setProperty('--o' + i, value)
        if (i == 2) {
            if (targetBlank == '_self') setTileTarget('_blank')
            else setTileTarget('_self')
        }
        if (i == 7) {
            if (disableAnimations.toString() == 'true') {
                document.documentElement.classList.remove('no-animations')
                disableAnimations = false
            } else {
                document.documentElement.classList.add('no-animations')
                disableAnimations = true
            }
        }
        save_ntpbdy()
    }

    document.getElementById('stt_opt0').addEventListener('click', function () {
        set_option_t(this, 'none', 0)
    })
    document.getElementById('stt_opt1').addEventListener('click', function () {
        set_option_t(this, ' ', 1)
    })
    document.getElementById('stt_opt4').addEventListener('click', function () {
        set_option_t(this, 'auto', 4)
    })
    document.getElementById('stt_opt5').addEventListener('click', function () {
        set_option_t(this, 'inline-block', 5)
    })
    document.getElementById('stt_opt3').addEventListener('click', function () {
        set_option_t(this, 'inline-block', 3)
    })
    document.getElementById('stt_opt2').addEventListener('click', function () {
        set_option_t(this, '_self', 2)
    })
    document.getElementById('stt_opt6').addEventListener('click', function () {
        set_option_t(this, 'flex', 6)
    })
    document.getElementById('stt_opt7').addEventListener('click', function () {
        set_option_t(this, false, 7)
    })
    //Font Changer
    const fs_value = getComputedStyle(ntp_bdy).getPropertyValue('--custom-font')
    const font_selector = document.getElementById('font-selector')
    const default_f =
        '-apple-system, system-ui, BlinkMacSystemFont, Roboto, sans-serif'
    font_selector.value = fs_value
    if (font_selector.value.length < 5) font_selector.value = 'Default'
    //console.log('|' + getComputedStyle(ntp_bdy).getPropertyValue('--custom-font') + '|')
    function f_update_font() {
        var font = document.getElementById('font-selector').value
        if (font == 'Default') font = default_f
        ntp_bdy.style.setProperty('--custom-font', font)
        save_ntpbdy()
        console.log(font)
    }
    document.getElementById('font-selector').onchange = () => {
        f_update_font()
    }
    //Search Bar Settings Config

    //Get SearchBar saved preferences
    const sb_dropdown_menu = document.getElementById('sb_icon_menu')
    const sb_icon_default = document.getElementById('sb_icon_default')
    const sb_custom_submit = document.getElementById('sb_custom_submit')
    var ntp_sb = ls_get('ntp_sb')
    if (
        ntp_sb == undefined ||
        ntp_sb.se == undefined ||
        ntp_sb.placeholder == undefined
    ) {
        ntp_sb = {
            se: {
                Google: true,
                Bing: true,
                Brave: true,
                DuckDuckGo: true,
                Ecosia: true,
                Qwant: true,
                Reddit: false,
                Startpage: true,
                Wikipedia: true,
                Yandex: true,
                Yahoo: true,
                Youtube: false
            },
            placeholder: ['Search with'],
            custom_se: {
                MySearch: ['#000']
            }
        }
        ls_set('ntp_sb', ntp_sb)
    }
    function hide_dropdown() {
        sb_dropdown_menu.classList.remove('active')
        document.removeEventListener('click', hide_dropdown)
    }
    function sb_handle_menu_click(e) {
        console.log('clicked', sb_dropdown_menu.classList.contains('active'))
        if (sb_dropdown_menu.classList.contains('active')) {
            console.log('remove')
            sb_dropdown_menu.classList.remove('active')
        } else {
            console.log('add')
            sb_dropdown_menu.classList.add('active')
            e.stopPropagation()
            document.addEventListener('click', hide_dropdown)
        }
    }
    function f_setup_sb() {
        console.log('Config setup sB')
        // First, remove the listener to prevent duplication
        sb_icon_default.removeEventListener('click', sb_handle_menu_click)
        sb_icon_default.addEventListener('click', sb_handle_menu_click)

        if (sb_icon_default == undefined) {
            const y = ntp_sett.order[0]
            customInner(document.getElementById('wdg_' + y), f_dwdg(0))
            f_cache_sb()
        }
        //*Search bar shadow on highlight */
        function addShadow() {
            document.getElementById('sb_input').style.boxShadow =
                'var(--sb-shadow)'
        }
        function removeShadow() {
            document.getElementById('sb_input').style.boxShadow = 'none'
        }
        document.getElementById('sb_input').addEventListener('focus', addShadow)
        document
            .getElementById('sb_input')
            .addEventListener('blur', removeShadow)
        document.getElementById('sb_icon_menu').innerHTML = ''
        Object.keys(ntp_sb.se).forEach((el, index) => {
            const se_status = ntp_sb.se[el]
            var se_item = se_data[el]
            if (se_item == undefined) se_item = ntp_sb.custom_se[el]
            if (se_item != undefined && se_status) {
                var si = document.createElement('li')
                si.setAttribute('data-se', el)
                si.addEventListener('click', (event) => {
                    var q = sb_dropdown_menu.querySelector('li.active_sb')
                    if (q != undefined) q.classList.remove('active_sb')
                    event.target.classList.add('active_sb')

                    var sei = se_data[event.target.innerText]
                    if (sei == undefined)
                        sei = ntp_sb.custom_se[event.target.innerText]
                    if (sei.color == undefined) sei.color = '#fff'
                    document.getElementById('sb_input').placeholder =
                        ntp_sb.placeholder + ' ' + event.target.innerText
                    sb_icon_default.style.background = sei.color
                    sb_icon_default.innerHTML = sei.icon
                    sb_dropdown_menu.classList.remove('active')
                })
                if (index == 0) {
                    document.getElementById('sb_input').placeholder =
                        ntp_sb.placeholder + ' ' + el
                    sb_icon_default.style.background = se_item.color
                    sb_icon_default.innerHTML = se_item.icon
                    si.className = 'active_sb'
                }
                var noshadow = ''
                if (se_item.color == '#ffffff') noshadow = 'box-shadow:none;'
                si.innerHTML =
                    '<span class="sb_icon" style="background: ' +
                    se_item.color +
                    ';' +
                    noshadow +
                    ' "> ' +
                    se_item.icon +
                    '</span> ' +
                    el
                document.getElementById('sb_icon_menu').appendChild(si)
            }
        })
        f_cache_sb()
    }
    document
        .getElementById('custom_sb_name')
        .addEventListener('blur', function () {
            document.getElementById('custom_sb_preview_i').placeholder =
                'Search with ' + this.value
        })
    sb_custom_submit.addEventListener('click', (e) => {
        var name = f_trim(document.getElementById('custom_sb_name').value)
        var query = f_trim(document.getElementById('custom_sb_query').value)
        var color = getComputedStyle(ntp_bdy).getPropertyValue('--sb_preview_c')
        //f_trim(document.getElementById('custom_sb_color').value)
        var value = document.getElementById('custom_sb_value').value

        if (
            name.length < 1 ||
            query.length < 1 ||
            color.length < 1 ||
            value.length < 1
        ) {
            ntoast.error('You need to complete all the required fields ')
        } else {
            ntp_sb.se[name] = true
            ntp_sb.custom_se[name] = { color: color, icon: value, query: query }
            ls_set('ntp_sb', ntp_sb)
            render_se_list()
            ntoast.success('Custom Search Engine added !')
            dlg_sb.hide()
            f_setup_sb()
        }
    })

    function render_se_list() {
        var se_keys = Object.keys(ntp_sb.se)
        var se_custom_keys = Object.keys(ntp_sb.custom_se)
        //Clean
        se_custom_keys.forEach((el) => {
            if (!se_keys.includes(el)) delete ntp_sb.custom_se[el]
        })
        //Fix missing keys
        Object.keys(se_data).forEach((el) => {
            if (!se_keys.includes(el)) {
                ntp_sb.se[el] = false
            }
        })
        if (se_keys.length != Object.keys(ntp_sb.se)) {
            se_keys = Object.keys(ntp_sb.se)
            ls_set('ntp_sb', ntp_sb)
        }

        const list = document.getElementById('stt_selist')
        while (list.firstChild) {
            list.removeChild(list.firstChild)
        }
        se_keys.forEach((el, index) => {
            const se_status = ntp_sb.se[el]
            var se_item = se_data[el]
            if (se_item != undefined) {
                let setChecked = se_status == true ? 'checked' : ''
                let li = document.createElement('li')
                var noshadow = ''
                if (se_item.color == '#ffffff') noshadow = 'box-shadow:none;'
                li.innerHTML =
                    '<svg class="_icon stt_selisth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>' +
                    '<div class="sb_item"><span class="sb_icon" style="background: ' +
                    se_item.color +
                    ';' +
                    noshadow +
                    '"> ' +
                    se_item.icon +
                    '</span>' +
                    el +
                    '</div><input ' +
                    'class="toggle" type="checkbox" id="tg_se' +
                    el +
                    '" ' +
                    setChecked +
                    ' />'
                list.appendChild(li)
                document.getElementById('tg_se' + el).onchange = () => {
                    toggle_se_status(el)
                }
            } else {
                let se_custom = ntp_sb.custom_se[el]
                if (se_custom != undefined) {
                    let setChecked = se_status == true ? 'checked' : ''
                    let li = document.createElement('li')
                    li.innerHTML =
                        '<svg class="_icon stt_selisth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>' +
                        '<div class="sb_item"><span class="sb_icon" style="background: ' +
                        se_custom.color +
                        ' "> ' +
                        se_custom.icon +
                        '</span>' +
                        el +
                        '</div><svg id="sbdse' +
                        el +
                        '" class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg><input ' +
                        'class="toggle" type="checkbox" id="tg_se' +
                        el +
                        '" ' +
                        setChecked +
                        ' />'
                    list.appendChild(li)
                    document.getElementById('tg_se' + el).onchange = () => {
                        toggle_se_status(el)
                    }
                    document
                        .getElementById('sbdse' + el)
                        .addEventListener('click', () => {
                            sb_delete_se(el)
                        })
                } else {
                    console.log(se_custom, el)
                }
            }
        })
    }
    render_se_list()

    function sb_delete_se(a) {
        console.log(ntp_sb.custom_se)
        delete ntp_sb.custom_se[a]
        delete ntp_sb.se[a]
        ls_set('ntp_sb', ntp_sb)
        render_se_list()
        f_setup_sb()
    }
    //Config widgets ordering and toggle
    Sortable.create(document.getElementById('stt_selist'), {
        handle: '.stt_selisth',
        animation: 150,
        onEnd: function (evt) {
            var se_list = {}
            var list = document
                .getElementById('stt_selist')
                .getElementsByTagName('li')
            for (var z = 0; z < list.length; z++) {
                var a = list[z].innerText
                var s = list[z].querySelector('input').checked
                se_list[a] = s
            }
            ntp_sb.se = se_list
            console.log(ntp_sb)
            ls_set('ntp_sb', ntp_sb)
            f_setup_sb()
        }
    })

    function toggle_se_status(key_name) {
        console.log(key_name)
        const se_status = ntp_sb.se[key_name]
        ntp_sb.se[key_name] = !se_status
        f_setup_sb()
        ls_set('ntp_sb', ntp_sb)
    }

    //Function to remove multiple, leading or trailing spaces
    function f_trim(s) {
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        s = s.replace(/[ ]{2,}/gi, ' ')
        s = s.replace(/\n /, '\n')
        return s
    }

    //Top Margin Spacing sliders for widgets
    const tms_r0 = document.getElementById('tms_r0')
    const tms_r0v = document.getElementById('tms_r0v')
    const tms_r1 = document.getElementById('tms_r1')
    const tms_r1v = document.getElementById('tms_r1v')
    const tms_r2 = document.getElementById('tms_r2')
    const tms_r2v = document.getElementById('tms_r2v')
    var tms_0 = parseInt(
        ntp_bdy.style.getPropertyValue('--tms0').replace('px', '')
    )
    var tms_1 = parseInt(
        ntp_bdy.style.getPropertyValue('--tms1').replace('px', '')
    )
    var tms_2 = parseInt(
        ntp_bdy.style.getPropertyValue('--tms2').replace('px', '')
    )
    if (isNaN(tms_0)) {
        tms_0 = 10
        ntp_bdy.style.setProperty('--tms0', ' 10px')
        save_ntpbdy()
    }
    if (isNaN(tms_1)) {
        tms_1 = 10
        ntp_bdy.style.setProperty('--tms1', ' 10px')
        save_ntpbdy()
    }
    if (isNaN(tms_2)) {
        tms_2 = 10
        ntp_bdy.style.setProperty('--tms2', ' 10px')
        save_ntpbdy()
    }
    tms_r0.value = tms_0
    tms_r1.value = tms_1
    tms_r2.value = tms_2
    tms_r0v.innerText = tms_0
    tms_r1v.innerText = tms_1
    tms_r2v.innerText = tms_2
    tms_r0.addEventListener('input', function () {
        tms_0 = parseInt(tms_r0.value)
        tms_r0v.innerText = tms_0
        ntp_bdy.style.setProperty('--tms0', tms_0 + 'px')
        save_ntpbdy()
    })
    tms_r1.addEventListener('input', function () {
        tms_1 = parseInt(tms_r1.value)
        tms_r1v.innerText = tms_1
        ntp_bdy.style.setProperty('--tms1', tms_1 + 'px')
        save_ntpbdy()
    })
    tms_r2.addEventListener('input', function () {
        tms_2 = parseInt(tms_r2.value)
        tms_r2v.innerText = tms_2
        ntp_bdy.style.setProperty('--tms2', tms_2 + 'px')
        save_ntpbdy()
    })

    const tg_r5 = document.getElementById('tg_r5')
    const tg_r5vs = document.getElementById('tg_r5v')
    var tg_r5v = parseInt(
        ntp_bdy.style.getPropertyValue('--v0').replace('px', '')
    )
    tg_r5vs.innerText = tg_r5v
    if (isNaN(tg_r5v)) {
        tg_r5v = 10
        tg_r5vs.innerText = tg_r5v
        ntp_bdy.style.setProperty('--v0', tg_r5v + 'px')
        save_ntpbdy()
    }
    tg_r5.value = tg_r5v
    tg_r5.addEventListener('input', function () {
        tg_r5v = parseInt(tg_r5.value)
        tg_r5vs.innerText = tg_r5v
        ntp_bdy.style.setProperty('--v0', tg_r5v + 'px')
        save_ntpbdy()
    })
    //Border radius slider for Search Bar Logo
    const tg_r7 = document.getElementById('tg_r7')
    const tg_r7vs = document.getElementById('tg_r7v')
    var tg_r7v = parseInt(
        ntp_bdy.style.getPropertyValue('--v2').replace('px', '')
    )
    tg_r7vs.innerText = tg_r7v
    if (isNaN(tg_r7v)) {
        tg_r7v = 8
        tg_r7vs.innerText = tg_r7v
        ntp_bdy.style.setProperty('--v2', tg_r7v + 'px')
        save_ntpbdy()
    }
    tg_r7.value = tg_r7v
    tg_r7.addEventListener('input', function () {
        tg_r7v = parseInt(tg_r7.value)
        tg_r7vs.innerText = tg_r7v
        ntp_bdy.style.setProperty('--v2', tg_r7v + 'px')
        save_ntpbdy()
    })
    //Search bar top margin
    const tg_r8 = document.getElementById('tg_r8')
    const tg_r8vs = document.getElementById('tg_r8v')
    var tg_r8v = parseInt(
        ntp_bdy.style.getPropertyValue('--v3').replace('px', '')
    )
    tg_r8vs.innerText = tg_r8v
    if (isNaN(tg_r8v)) {
        tg_r8v = 10
        tg_r8vs.innerText = tg_r8v
        ntp_bdy.style.setProperty('--v3', tg_r8v + 'px')
        save_ntpbdy()
    }
    tg_r8.value = tg_r8v
    tg_r8.addEventListener('input', function () {
        tg_r8v = parseInt(tg_r8.value)
        tg_r8vs.innerText = tg_r8v
        ntp_bdy.style.setProperty('--v3', tg_r8v + 'px')
        save_ntpbdy()
    })
    //Width slider for Search Bar Logo
    const tg_r6 = document.getElementById('tg_r6')
    const tg_r6vs = document.getElementById('tg_r6v')
    var tg_r6v = parseInt(
        ntp_bdy.style.getPropertyValue('--v1').replace('px', '')
    )
    tg_r6vs.innerText = tg_r6v
    if (isNaN(tg_r6v)) {
        tg_r6v = 230
        tg_r6vs.innerText = tg_r6v
        ntp_bdy.style.setProperty('--v1', tg_r6v + 'px')
        save_ntpbdy()
    }
    tg_r7.setAttribute('max', tg_r6v / 2)
    tg_r6.value = tg_r6v
    tg_r6.addEventListener('input', function () {
        tg_r6v = parseInt(tg_r6.value)
        tg_r6vs.innerText = tg_r6v
        ntp_bdy.style.setProperty('--v1', tg_r6v + 'px')
        save_ntpbdy()
    })

    const sb_logo = document.getElementById('sb_logo')
    const sett_sblgp = document.getElementById('sb_lgp')
    const sett_sb_lgf = document.getElementById('sb_lgf')
    const c_sb_file = document.getElementById('custom_sb_file')
    const c_sb_value = document.getElementById('custom_sb_value')
    const c_sb_preview = document.getElementById('custom_sb_preview')
    c_sb_value.addEventListener('keyup', () => {
        c_sb_preview.innerHTML = c_sb_value.value
    })
    function f_sb_lg1() {
        var file = sett_sb_lgf.files[0] // get a reference to the selected file
        if (file && file.type.match('image.*')) {
            var reader = new FileReader()
            reader.onload = function (e) {
                ntp_bdy.style.setProperty(
                    '--sb-img-l',
                    'url(' + e.target.result + ')'
                )
                ntp_bdy.style.setProperty('--sb-img-d', 'var(--sb-img-l)')
                save_ntpbdy()
            }
            reader.readAsDataURL(file)
        }
    }
    function f_custom_sb1() {
        var file = c_sb_file.files[0]
        if (file) {
            var reader = new FileReader()
            reader.onload = function (e) {
                if (file.type === 'image/svg+xml') {
                    console.log('type svg:' + e.target.result)
                    c_sb_value.value = '<img src="' + e.target.result + '"/>'
                    c_sb_preview.innerHTML = c_sb_value.value
                } else if (file.type.match('image.*')) {
                    var img = new Image()
                    img.onload = function () {
                        if (img.width > 128 || img.height > 128) {
                            alert(
                                'Image size should not exceed 128x128 pixels.'
                            )
                            return
                        }
                        c_sb_value.value =
                            '<img src="' + e.target.result + '"/>'
                        c_sb_preview.innerHTML = c_sb_value.value
                    }
                    img.src = e.target.result
                } else {
                    ntoast.error(
                        'Unsupported file format. Please choose an image or SVG file.'
                    )
                }
            }
            reader.readAsDataURL(file)
        }
    }

    function f_custom_sb2() {
        var url = prompt('Enter URL of the icon', '')
        if (!url) return
        var img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = function (e) {
            if (img.width > 128 || img.height > 128) {
                alert('Image size should not exceed 128x128 pixels.')
                return
            }
            var canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            var ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)
            var dataURL = canvas.toDataURL('image/png')
            c_sb_value.value = '<img src="' + dataURL + '"/>'
            c_sb_preview.innerHTML = c_sb_value.value
        }
        img.onerror = function () {
            console.log(url)
            if (url) {
                fetch(url)
                    .then((response) => response.text())
                    .then((svgData) => {
                        if (svgData.startsWith('<svg')) {
                            c_sb_value.value = svgData
                        } else {
                            alert(
                                'Invalid image URL or SVG format not supported.'
                            )
                        }
                    })
                    .catch((error) => {
                        alert('Error loading the image or SVG file.')
                    })
            }
        }
        img.src = url
    }

    function f_sb_lg2() {
        var url = prompt('Enter url of the wallpaper .', '')
        if (!url) return
        var img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = function (e) {
            var canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            var ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)
            var dataURL = canvas.toDataURL('image/png')
            ntp_bdy.style.setProperty('--sb-img-l', 'url(' + dataURL + ')')
            ntp_bdy.style.setProperty('--sb-img-d', 'var(--sb-img-l)')
            save_ntpbdy()
        }
        img.src = url
    }
    document.getElementById('b_sbfl').addEventListener('click', f_sb_lg2)
    document.getElementById('sb_lgf').addEventListener('change', f_sb_lg1)
    document
        .getElementById('custom_sb_link')
        .addEventListener('click', f_custom_sb2)
    c_sb_file.addEventListener('change', f_custom_sb1)

    function f_cache_sb() {
        const y = ntp_sett.order[0]
        ntp_wdg[0].cached = document.getElementById('wdg_' + y).innerHTML
        console.log('Cache search bar')
        ls_set('ntp_wdg', ntp_wdg)
    }

    //Search Bar Widget Config
    if (ntp_sett.status[0]) {
        String.prototype.replaceAll = function (search, replacement) {
            var target = this
            return target.split(search).join(replacement)
        }

        function handleKeyPress(e) {
            const key = e.keyCode || e.which
            var text = document
                .getElementById('sb_input')
                .value.replaceAll('+', '%2B')
            if (key == 13) search(text)
        }
        document.getElementById('sb_input').onkeydown = (e) => {
            handleKeyPress(e)
        }

        function search(text) {
            var key = sb_dropdown_menu
                .querySelector('li.active_sb')
                .getAttribute('data-se')
            console.log(key, se_data)
            let query
            if (se_data[key] == undefined) query = ntp_sb.custom_se[key].query
            else query = se_data[key].query
            window.location = query + text
        }
        f_setup_sb()
    } // End of Search Bar Widget Config

    //Tiles Grid Widget Config
    if (ntp_sett.status[1]) {
        var gridT, fldT
        var timeoutVariable
        var currentEditedTile
        var tlg = document.getElementById('tlg')
        const dlg_new_tf_title = document.getElementById('dlg_new_tf-title')
        const p_tile = document.getElementById('p_tile')
        const i_url = document.getElementById('i_url')
        const i_file = document.getElementById('i_file')
        const t_ac = document.getElementById('t_ac')
        const t_url = document.getElementById('t_url')
        const t_lab = document.getElementById('t_lab')
        const ft_lab = document.getElementById('ft_lab')
        const dlg_fl = document.getElementById('dlg_fl')
        const dlg_tg = document.getElementById('dlg_tg')
        const b_save = document.getElementById('b_save')
        const b_add = document.getElementById('b_add')
        const b_save2 = document.getElementById('b_save2')
        const b_add2 = document.getElementById('b_add2')
        const fldb = document.getElementById('lrt_bfl')
        var fld_current

        function f_i_file() {
            const file = i_file.files[0]
            t_ac.checked = false
            i_url.disabled = false

            if (!file) {
                alert('No file selected.')
                return
            }
            if (!file.type.startsWith('image/')) {
                alert('Selected file is not an image.')
                return
            }
            if (file.size > 1024 * 1024) {
                alert('Image size exceeds 128x128.')
                return
            }

            const reader = new FileReader()
            reader.onload = function () {
                const base64String = reader.result.split(',')[1]
                console.log('New tile logo Base64 string:', base64String)
                i_url.value = 'data:image/png;base64,' + base64String
                f_spti()
            }

            reader.readAsDataURL(file)
        }
        document.getElementById('i_file').addEventListener('change', f_i_file)
        function setTileTarget(value) {
            var ar = document.getElementsByClassName('tile_target')
            for (var i = 0; i < ar.length; i++) ar[i].target = value
            targetBlank = value
            f_cache_tl()
        }

        //Function to cache the tiles
        function f_cache_tl() {
            if (
                typeof localStorage.cachedGridUpdate == 'undefined' ||
                Date.now() / 1000 - localStorage.cachedGridUpdate >= 0.1
            ) {
                var y = ntp_sett.order[1]
                ntp_wdg[1].cached = document.getElementById(
                    'wdg_' + y
                ).innerHTML
                localStorage.cachedGridUpdate = Date.now() / 1000
                console.log(
                    'Cache grid tiles : ' + localStorage.cachedGridUpdate
                )
            }
            ls_set('ntp_wdg', ntp_wdg)
        }
        //Toggle lrt for new/edit tile/folder
        function f_dlg(view) {
            dlg_tg.style.display = view == 0 || view == 1 ? 'flex' : 'none'
            dlg_fl.style.display = view == 2 || view == 3 ? 'flex' : 'none'
            b_add.style.display = view == 0 ? 'flex' : 'none'
            b_add2.style.display = view == 2 ? 'flex' : 'none'
            b_save.style.display = view == 1 || view == 3 ? 'flex' : 'none'
            dlg_new_tf_title.innerText =
                view == 0
                    ? 'New Tile'
                    : view == 1
                      ? 'Edit Tile'
                      : view == 2
                        ? 'New Folder'
                        : 'Edit Folder'
            //Open Settings
            dlg_new_tf.show()
            document.getElementById('flt_btn').classList.remove('open')
        }
        dlg_new_tf.on('hide', () => {
            p_tile.src = './assets/nextntp_logo.svg'
            i_url.value = ''
            t_url.value = 'https://'
            t_lab.value = ''
            t_ac.checked = true
            i_url.disabled = true
            b_add.style.display = 'inline'
            b_add2.style.display = 'none'
            b_save.style.display = 'none'
            window.clearTimeout(timeoutVariable)
        })

        document.getElementById('b_newf').addEventListener('click', () => {
            f_dlg(2)
        })
        document.getElementById('b_newt').addEventListener('click', () => {
            f_dlg(0)
        })

        //Create a new folder from lrt
        function f_cnf() {
            if (ft_lab.value.trim().length > 0) {
                var div = document.createElement('div')
                div.classList.add('tlg_item', 'folder')
                div.innerHTML =
                    '<div class="tlg_img tlg_fld"></div><span class="tlg_title">' +
                    ft_lab.value +
                    '</span>'
                tlg.appendChild(div)
                f_setup_gtiles()
                dlg_new_tf.hide()
            } else {
                ntoast.error('Folder name cannot be empty')
            }
        }

        //Create a new tile from lrt
        function f_cnt() {
            if (
                t_url.value.trim().length > 0 &&
                get_root_domain(t_url.value).length > 0
            ) {
                var newt = {}
                newt['url'] = fixURL(t_url.value)
                var title = t_lab.value
                if (title == '') title = get_root_domain(newt['url'])
                newt['title'] = title
                newt['imgSrc'] = p_tile.src
                f_attg(newt) //Create new tile and add to grid
                dlg_new_tf.hide()
            } else {
                ntoast.error('Tile url cannot be empty')
            }
        }
        document.getElementById('b_add').addEventListener('click', f_cnt)
        document.getElementById('b_add2').addEventListener('click', f_cnf)
        //Edit a tile/folder from grid
        function f_etfg(item) {
            currentEditedTile = item
            var title = item.textContent
            if (currentEditedTile.classList.contains('folder')) {
                try {
                    var img = item.querySelector('.tlg-img').backgroundImage
                } catch {
                    console.log('something when wrong there ')
                }
                ft_lab.value = title
                f_dlg(3)
            } else {
                let url = item.querySelector('.tile_target').href
                let img = item.querySelector('.tile_target > img').src
                t_ac.checked = false
                i_url.disabled = false
                p_tile.src = img
                i_url.value = img
                t_url.value = url
                t_lab.value = title
                f_spti()
                f_dlg(1)
            }
        }
        //Set p_tile image from t_url
        function f_sptt() {
            if (i_url.disabled) {
                window.clearTimeout(timeoutVariable)
                timeoutVariable = setTimeout(function () {
                    var iUrl =
                        'https://logos.kiwibrowser.com/' +
                        get_root_domain(t_url.value)
                    p_tile.src = iUrl
                    i_url.value = iUrl
                }, 1000)
            }
        }
        //Set p_tile image from i_url
        function f_spti() {
            window.clearTimeout(timeoutVariable)
            timeoutVariable = setTimeout(function () {
                p_tile.src = i_url.value
            }, 1000)
        }
        //Toggle auto/custom mode of icon tile
        function f_sac() {
            console.log('f_sac i_url' + i_url.disabled)
            if (i_url.disabled) {
                t_ac.checked = false
                i_url.disabled = false
                i_url.select()
                i_url.focus()
                f_spti()
            } else {
                t_ac.checked = true
                i_url.disabled = true
                f_sptt()
            }
        }
        t_ac.addEventListener('change', f_sac)
        i_url.addEventListener('paste', f_spti)
        i_url.addEventListener('keyup', f_spti)
        i_url.addEventListener('blur', f_sptt)
        t_url.addEventListener('keyup', f_sptt)

        //Apply change to edited tile/folder and save
        document.getElementById('b_save').onclick = () => {
            var item = currentEditedTile

            if (!currentEditedTile.classList.contains('folder')) {
                item.querySelector('.tile_target').href = t_url.value
                let title = t_lab.value
                if (title == '') title = get_root_domain(newt['url'])
                item.children[0].children[1].innerHTML = title
                item.children[0].children[0].src = p_tile.src
            } else {
                item.children[1].innerHTML = ft_lab.value
            }
            f_cache_tl()
            dlg_new_tf.hide()
        }
        //Fallback image
        document.getElementById('p_tile').onerror = () => {
            var url = i_url.value
            if (url[30]) p_tile.src = url + '?fallback=1'
        }

        //Add a tile into the grid
        function f_attg(item) {
            var innerDiv = document.createElement('div')
            innerDiv.className = 'tlg_item'
            innerDiv.innerHTML =
                '<a class="tile_target" href="' +
                item.url +
                '" ' +
                targetBlank +
                ' rel="noreferrer">' +
                '<img class="tlg_img" src="' +
                item.imgSrc +
                '" /><span class="tlg_title">' +
                item.title +
                '</span></a>'
            tlg.appendChild(innerDiv)
            console.log(
                ' Function f_attg -> url : ' +
                    item.url +
                    '   |  title : ' +
                    item.title +
                    ' | img : ' +
                    item.imgSrc
            )
            f_evl_gtiles()
            //Save
            window.setTimeout(function () {
                f_cache_tl()
            }, 200)
        }
        //Function to open folder lrt
        function f_ofld(el) {
            fld_current = el.querySelector('.tlg_fld')
            var tls = fld_current.innerHTML
            fldb.innerHTML = tls
            lrt_fl.show()
        }
        //Function to toggle edit mode of folder
        function f_tggl_f() {
            var state = fldT.option('disabled')
            fldT.option('disabled', !state)
            document.getElementById('fld_editA').style.display = !state
                ? 'none'
                : 'flex'
            if (!state) {
                fld_current.innerHTML = fldb.innerHTML
                f_cache_tl()
            }
        }
        //Function to toggle edit mode of tiles
        function f_tggl_t() {
            var state = gridT.option('disabled')
            gridT.option('disabled', !state)
            document.getElementById('tlg_sldr').style.display = !state
                ? 'none'
                : 'flex'
            document.getElementById('tlg_editA').style.display = !state
                ? 'none'
                : 'flex'
            if (!state) {
                f_cache_tl()
                save_ntpbdy()
            }
        }
        //Function to add listener on tlg_items
        function f_evl_gtiles() {
            var currentFolder = null
            var folders = document.querySelectorAll('.folder:not(.np)')

            Array.from(folders).forEach((e) => {
                e.onclick = function () {
                    f_ofld(e)
                }
            })
            //To toggle edit mode on grid tiles
            document.getElementById('tlg').oncontextmenu = function (e) {
                e.preventDefault()
                f_tggl_t()
            }
            //To toggle edit mode on folder view
            document.getElementById('lrt_bfl').oncontextmenu = function (e) {
                e.preventDefault()
                f_tggl_f()
            }
            //To exit toggle mode on folder view
            /*
            lrt_fl.m.addEventListener('click', function (e) {
                if (e.target == this) {
                    e.preventDefault()
                    f_tggl_f()
                }
            })*/
        }
        //Function to setup sliders on grid tiles
        function f_setup_sldr() {
            const ntp_bdy = document.body

            //Add slider options for grid tiles
            if (
                !document.getElementById('tlg_sldr') ||
                !document.querySelector('#tlg_sldr .updt')
            ) {
                var div = document.createElement('div')
                div.id = 'tlg_sldr'
                div.innerHTML =
                    '<div id="sld_tg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="updt"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6h8M16 6h4M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12h2M10 12h10M15 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18h11M19 18h1"/></svg>   Grid Tiles Sliders</div><div id="sld_vw" class="flex-column"><div><label>Number of Tiles : <span id="tg_r1v"></span> </label><input type="range" min="0" max="8" value="50" class="slr_rng" id="tg_r1"></div>' +
                    '<div><label>Tile Width : <span id="tg_r2v"></span> </label><input type="range" min="30" max="200" value="50" class="slr_rng" id="tg_r2"></div>' +
                    '<div><label>Tile Space : <span id="tg_r3v"></span> </label><input type="range" min="0" max="100" value="50" class="slr_rng" id="tg_r3"></div>' +
                    '<div><label>Tile Rounding : <span id="tg_r4v"></span> </label><input type="range" min="0" max="100" value="50" class="slr_rng" id="tg_r4"></div></div>'
                tlg.parentNode.prepend(div)
            }
            const wid =
                (window.innerWidth ? window.innerWidth : screen.width) - 28 //Get the width of device
            console.log(
                '🚀 ~ file: f_setup_sldr.js ~ line 16 ~ f_setup_sldr ~ wid',
                wid
            )

            const tg_r1 = document.getElementById('tg_r1')
            const tg_r2 = document.getElementById('tg_r2')
            const tg_r3 = document.getElementById('tg_r3')
            const tg_r4 = document.getElementById('tg_r4')
            const tg_r1v = document.getElementById('tg_r1v')
            const tg_r2v = document.getElementById('tg_r2v')
            const tg_r3v = document.getElementById('tg_r3v')
            const tg_r4v = document.getElementById('tg_r4v')
            var ntp_tlg = {
                w: parseInt(
                    ntp_bdy.style.getPropertyValue('--tile-w').replace('px', '')
                ),
                m: parseInt(
                    ntp_bdy.style.getPropertyValue('--tile-m').replace('px', '')
                ),
                n: parseInt(ntp_bdy.style.getPropertyValue('--tile-n')),
                r: parseInt(
                    ntp_bdy.style.getPropertyValue('--tile-r').replace('px', '')
                )
            }
            if (isNaN(ntp_tlg.w)) {
                ntp_tlg = {
                    w: 64,
                    m: 10,
                    n: f_gncols(),
                    r: 32
                }
                setTLG()
            }
            tg_r1.value = ntp_tlg.n
            tg_r1v.innerText = ntp_tlg.n
            tg_r2.value = ntp_tlg.w
            tg_r2v.innerText = ntp_tlg.w
            tg_r3.value = ntp_tlg.m
            tg_r3v.innerText = ntp_tlg.m
            tg_r4.setAttribute('max', ntp_tlg.w / 2)
            tg_r4.value = ntp_tlg.r
            tg_r4v.innerText = ntp_tlg.r
            tg_r1.addEventListener('input', function () {
                tg_r1v.innerText = tg_r1.value
                ntp_tlg.n = parseInt(tg_r1.value)
                set_tg_r1()
            })
            tg_r2.addEventListener('input', function () {
                tg_r2v.innerText = tg_r2.value
                ntp_tlg.w = parseInt(tg_r2.value)
                set_tg_r2()
            })
            tg_r3.addEventListener('input', function () {
                tg_r3v.innerText = tg_r3.value
                ntp_tlg.m = parseInt(tg_r3.value)
                set_tg_r3()
            })
            tg_r4.addEventListener('input', function () {
                tg_r4v.innerText = tg_r4.value
                ntp_tlg.r = parseInt(tg_r4.value)
                setTLG()
            })
            //Set values in settings
            function setTLG() {
                tg_r1.value = ntp_tlg.n
                tg_r1v.innerText = ntp_tlg.n
                tg_r2.value = ntp_tlg.w
                tg_r2v.innerText = ntp_tlg.w
                tg_r3.value = ntp_tlg.m
                tg_r3v.innerText = ntp_tlg.m
                tg_r4.setAttribute('max', ntp_tlg.w / 2)
                tg_r4.value = ntp_tlg.r
                ntp_bdy.style.setProperty('--tile-n', ntp_tlg.n)
                ntp_bdy.style.setProperty('--tile-w', ntp_tlg.w + 'px')
                ntp_bdy.style.setProperty('--tile-m', ntp_tlg.m + 'px')
                ntp_bdy.style.setProperty('--tile-r', ntp_tlg.r + 'px')
                save_ntpbdy()
            }
            //Function to retrieve default number of cols
            function f_gncols() {
                if (wid > 253 && wid < 337) return 3
                else if (wid > 336 && wid < 421) return 4
                else if (wid > 420 && wid < 510) return 5
                else if (wid > 509 && wid < 672) return 6
                else if (wid > 671) return 8
                return 2
            }

            function set_tg_r3() {
                var tCol = parseInt(ntp_tlg.n)
                var tWidth = parseInt(ntp_tlg.w)
                var tMargin = parseInt(ntp_tlg.m)
                var calc = tCol * (tWidth + tMargin) + 1
                while (calc > wid) {
                    tWidth -= 1
                    calc = tCol * (tWidth + tMargin) + 1
                }
                ntp_tlg.n = tCol
                ntp_tlg.w = tWidth
                ntp_tlg.m = tMargin
                setTLG()
            }

            function set_tg_r2() {
                var tCol = parseInt(ntp_tlg.n)
                var tWidth = parseInt(ntp_tlg.w)
                var tMargin = 10
                var calc = tCol * (tWidth + tMargin) + 1
                while (calc > wid) {
                    tCol -= 1
                    calc = tCol * (tWidth + tMargin) + 1
                    console.log(wid + ' . - ' + calc)
                }
                ntp_tlg.n = tCol
                ntp_tlg.m = tMargin
                setTLG()
            }

            function set_tg_r1() {
                var nCol = parseInt(ntp_tlg.n),
                    tWidth = parseInt(ntp_tlg.w),
                    tMargin = parseInt(ntp_tlg.m)
                var calc = nCol * (tWidth + tMargin) + 1
                while (calc > wid) {
                    calc = nCol * (tWidth + tMargin) + 1
                    if (tMargin > 10) tMargin -= 1
                    else tWidth -= 1
                }
                ntp_tlg.n = nCol
                ntp_tlg.m = tMargin
                ntp_tlg.w = tWidth
                setTLG()
            }
        }

        //Function to exit from editemode
        function process_body_click(e) {
            if (e.target == document.getElementById('sld_tg')) {
                document.getElementById('sld_vw').classList.toggle('open_sld')
                e.preventDefault()
                return
            }
            if (e.target == document.getElementById('tlg_sldr')) {
                e.preventDefault()
                return
            }
            if (!gridT.option('disabled')) {
                document.getElementById('sld_vw').classList.remove('open_sld')
                f_tggl_t()
                e.preventDefault()
            }
            if (!fldT.option('disabled')) {
                f_tggl_f()
                e.preventDefault()
            }
            if (e.target == lrt_fl.m) {
                lrt_fl.hide()
                e.preventDefault()
            }
        }

        //Function to setup grid tiles
        function f_setup_gtiles() {
            tlg = document.getElementById('tlg')
            var tlg_editA = document.getElementById('tlg_editA')
            //Check if edit_area is created
            if (!tlg_editA || !document.querySelector('#edit_bin>.updt')) {
                var div = document.createElement('div')
                div.innerHTML =
                    '<div id="tlg_editA" class="edit_mode">' +
                    '<div id="edit_bin"><svg xmlns="http://www.w3.org/2000/svg" class="updt" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"/><path d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg></div>' +
                    '<div id="edit_pencil" ><svg xmlns="http://www.w3.org/2000/svg" class="updt" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="none" d="M0 0h24v24H0z"/><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"/></svg></div>' +
                    '</div>'
                if (!tlg_editA) {
                    tlg.parentNode.appendChild(div)
                } else {
                    tlg_editA.replaceWith(div)
                }
            }
            gridT = new Sortable(tlg, {
                group: {
                    name: 'editM',
                    pull: 'clone'
                },
                swapThreshold: 0.45,
                invertSwap: true,
                fallbackOnBody: true,
                animation: 150,
                ghostClass: 'hidden',
                disabled: 1,
                direction: 'horizontal',
                draggable: '.tlg_item',
                onChange: function (evt) {
                    document.getElementById('edit_bin').style.background =
                        'transparent'
                    document.getElementById('edit_pencil').style.background =
                        'transparent'
                    document.querySelectorAll('.tlg_fld').forEach((el) => {
                        el.parentNode.classList.remove('fldHover')
                    })
                }
            })
            var fldtest = document.querySelectorAll('.tlg_fld')
            for (var i = 0; i < fldtest.length; i++) {
                new Sortable(fldtest[i], {
                    group: {
                        name: 'editM',
                        pull: 'clone'
                    },
                    invertSwap: true,
                    fallbackOnBody: true,
                    animation: 150,
                    onAdd: function (evt) {
                        var itemEl = evt.clone
                        itemEl.parentNode.removeChild(itemEl)
                        document.querySelectorAll('.tlg_fld').forEach((el) => {
                            el.parentNode.classList.remove('fldHover')
                        })
                        document.getElementById('edit_bin').style.background =
                            'transparent'
                        document.getElementById(
                            'edit_pencil'
                        ).style.background = 'transparent'
                    },
                    onChange: function (evt) {
                        document.getElementById('edit_bin').style.background =
                            'transparent'
                        document.getElementById(
                            'edit_pencil'
                        ).style.background = 'transparent'
                        evt.to.parentNode.classList.add('fldHover')
                    }
                })
            }
            new Sortable(document.getElementById('edit_bin'), {
                group: 'editM',
                animation: 150,
                handle: '.handle',
                onAdd: function (evt) {
                    let itemEl = evt.item
                    itemEl.parentNode.removeChild(itemEl)
                    itemEl = evt.clone
                    itemEl.parentNode.removeChild(itemEl)
                    document.getElementById('edit_bin').style.background =
                        'transparent'
                },
                onChange: function (evt) {
                    document.querySelectorAll('.tlg_fld').forEach((el) => {
                        el.parentNode.classList.remove('fldHover')
                    })
                    document.getElementById('edit_pencil').style.background =
                        'transparent'
                    document.getElementById('edit_bin').style.background =
                        '#FF675C'
                }
            })
            new Sortable(document.getElementById('edit_pencil'), {
                group: 'editM',
                animation: 150,
                handle: '.handle',
                onAdd: function (evt) {
                    let itemEl = evt.clone
                    f_etfg(itemEl)
                    itemEl = evt.item
                    itemEl.parentNode.removeChild(itemEl)
                    document.getElementById('edit_pencil').style.background =
                        'transparent'
                    f_evl_gtiles()
                },
                onChange: function (evt) {
                    document.querySelectorAll('.tlg_fld').forEach((el) => {
                        el.parentNode.classList.remove('fldHover')
                    })
                    document.getElementById('edit_bin').style.background =
                        'transparent'
                    document.getElementById('edit_pencil').style.background =
                        '#40DE7A'
                }
            })
            const edit_b2 = document.getElementById('edit_bin2')
            const edit_p2 = document.getElementById('edit_pencil2')
            const edit_o2 = document.getElementById('edit_out2')
            fldT = new Sortable(fldb, {
                group: {
                    name: 'editM2',
                    pull: 'clone'
                },
                swapThreshold: 0.45,
                invertSwap: true,
                fallbackOnBody: true,
                animation: 150,
                ghostClass: 'hidden',
                disabled: 1,
                direction: 'horizontal',
                draggable: '.tlg_item',
                onChange: function (evt) {
                    edit_b2.style.background = 'transparent'
                    edit_p2.style.background = 'transparent'
                    edit_o2.style.background = 'transparent'
                }
            })
            new Sortable(edit_b2, {
                group: 'editM2',
                animation: 150,
                handle: '.handle',
                onAdd: function (evt) {
                    var itemEl = evt.item
                    itemEl.parentNode.removeChild(itemEl)
                    itemEl = evt.clone
                    itemEl.parentNode.removeChild(itemEl)
                    edit_b2.style.background = 'transparent'
                },
                onChange: function (evt) {
                    edit_p2.style.background = 'transparent'
                    edit_o2.style.background = 'transparent'
                    edit_b2.style.background = '#FF675C'
                }
            })
            new Sortable(edit_o2, {
                group: 'editM2',
                animation: 150,
                handle: '.handle',
                onAdd: function (evt) {
                    var itemEl = evt.item
                    tlg.appendChild(itemEl)
                    itemEl = evt.clone
                    itemEl.parentNode.removeChild(itemEl)
                    edit_o2.style.background = 'transparent'
                    f_tggl_f()
                    f_evl_gtiles()
                },
                onChange: function (evt) {
                    edit_b2.style.background = 'transparent'
                    edit_o2.style.background = '#1492FF'
                    edit_p2.style.background = 'transparent'
                }
            })
            new Sortable(edit_p2, {
                group: 'editM2',
                animation: 150,
                handle: '.handle',
                onAdd: function (evt) {
                    let itemEl = evt.clone
                    f_etfg(itemEl)
                    itemEl = evt.item
                    itemEl.parentNode.removeChild(itemEl)
                    edit_p2.style.background = 'transparent'
                    f_evl_gtiles()
                },
                onChange: function (evt) {
                    edit_b2.style.background = 'transparent'
                    edit_o2.style.background = 'transparent'
                    edit_p2.style.background = '#40DE7A'
                }
            })
            f_evl_gtiles()
            f_setup_sldr()
            window.setTimeout(function () {
                f_cache_tl()
            }, 900)
        }
        //Add body click used to disable edit_mode
        document.body.addEventListener('click', process_body_click)
        f_setup_gtiles()
    } // End of Tiles Grid Widget Config

    //News Section Widget Config
    if (ntp_sett.status[2]) {
        var forceReload = false
        var xDiff, xDown
        // Check if 30h passed and clean the news
        function shouldIC() {
            const date1 = new Date()
            const date2 = new Date(localStorage.shouldIC)
            if (localStorage.shouldIC == undefined) {
                localStorage.shouldIC = date1
                return false
            }
            const diffTime = Math.abs(date2 - date1)
            const diffH = Math.ceil(diffTime / (1000 * 60 * 60))
            if (diffH < 30) return false
            localStorage.shouldI = date1
            return true
        }
        //Function that add delete item news on swipe
        function f_astd() {
            var xDown = (xDiff = null)
            const ntms = document.getElementsByClassName('news_item')
            for (var i = 0; i < ntms.length; i++) {
                ntms[i].addEventListener(mLstnr[2], f_ev_start, {
                    passive: true
                })
                ntms[i].addEventListener(mLstnr[0], f_ev_move, {
                    passive: true
                })
                ntms[i].addEventListener(mLstnr[1], f_ev_end, {
                    passive: true
                })
            }

            function f_ev_start(evt) {
                xDown = isTD ? evt.touches[0].clientX : evt.pageX
            }

            function f_ev_move(evt) {
                var el = evt.target.closest('div.news_item')
                el.style.transition = 'margin 0ms'
                if (!xDown) return
                var xUp = isTD ? evt.touches[0].clientX : evt.pageX
                xDiff = xDown - xUp
                if (xDiff < 20 && xDiff > -20) return
                if (xDiff < -20) el.style.marginLeft = Math.abs(xDiff) + 'px'
                else el.style.marginLeft = '-' + xDiff + 'px'
                if (xDiff < 130 && xDiff > -130)
                    el.style.opacity = '1' - Math.abs(xDiff) / 130
            }

            function f_ev_end(evt) {
                var el = evt.target.closest('div.news_item')
                if (xDiff > 130 || xDiff < -130) {
                    el.parentNode.removeChild(el)
                    fc_ns()
                } else {
                    el.style.transition = 'margin 600ms'
                    el.style.opacity = '1'
                    el.style.marginLeft = '4px'
                }
                xDiff = xDown = null
            }
        }
        //Function to cache the news section
        function fc_ns() {
            if (
                typeof localStorage.cachedNewsUpdate == 'undefined' ||
                Date.now() / 1000 - localStorage.cachedNewsUpdate >= 0.1
            ) {
                const y = ntp_sett.order[2]
                ntp_wdg[2].cached = document.getElementById(
                    'wdg_' + y
                ).innerHTML
                localStorage.cachedNewsUpdate = Date.now() / 1000
                console.log(
                    'Cache news section : ' + localStorage.cachedNewsUpdate
                )
            }
            ls_set('ntp_wdg', ntp_wdg)
        }
        //Function to toggle news view mode ( compact / standard )
        function f_tnv() {
            if (getComputedStyle(ntp_bdy).getPropertyValue('--o4') == '150px') {
                ntp_bdy.style.setProperty('--o4', 'auto')
            } else {
                ntp_bdy.style.setProperty('--o4', '150px')
            }
            save_ntpbdy()
            fc_ns()
        }
        //Function to reload news ( 1 for full clean )
        function f_nsrl(t) {
            if (t == 1 || t == 2) {
                localStorage.removeItem('itemsNews')
                localStorage.newsLe = document.getElementById('newsL').value
                document.getElementById('news').innerHTML = ''
                if (t == 2) ntoast.success('Fetched news cleaned !')
            }
            localStorage.removeItem('cachedNewsUpdate')
            forceReload = true
            loadGNews()
            window.setTimeout(function () {
                f_astd()
            }, 1000)
            window.setTimeout(function () {
                f_astd()
            }, 2000)
        }
        document.getElementById('b_cfn').onclick = () => {
            f_nsrl(2)
        }
        document.getElementById('newsL').onchange = () => {
            f_nsrl(1)
        }
        //Function to convert locale into readable text
        function locale_to_readabletext(string) {
            string = string.replace('%3A', ':')
            for (let locale in locales) {
                if (locales[locale].replace('%3A', ':') == string) return locale
            }
            return null
        }
        var loadingSVG
        //Function for svg loading news animation
        function render_news_loading() {
            loadingSVG = document.createElement('div')
            loadingSVG.id = 'loadingNW'
            loadingSVG.innerHTML =
                '<svg x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"><rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"/></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"/></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"/></rect></svg>'
            document.getElementById('news').prepend(loadingSVG)
        }
        //Function to create an id for news to track them
        function c_itemnews_ID(title) {
            var result = title
                .toUpperCase()
                .replace(/\b(\S{1,2})\S*/g, '$1')
                .replace(/ /g, '')
                .replace(/[^a-z0-9]/gi, '')
            var tResult = result.substring(0, 8)
            return tResult
        }
        //Function to add a news item
        function add_gnews(title, news_time, source, source_logo, link, image) {
            const itemID = c_itemnews_ID(title)
            //If the news has been fetched, don't add it
            if (
                localStorage.itemsNews &&
                localStorage.itemsNews.indexOf(itemID) > -1
            )
                return
            var itemsNews = []
            if (ls_get('itemsNews')) itemsNews = ls_get('itemsNews')
            itemsNews.push(itemID)
            ls_get('itemsNews', itemsNews)
            var innerDiv = document.createElement('div')
            innerDiv.className = 'news_item'
            innerDiv.id = itemID
            var imgrender = ''
            if (image != null)
                imgrender =
                    '<img src="' +
                    image +
                    '" class="news_img" alt="Article Source" onerror="this.remove();" />'
            innerDiv.innerHTML =
                imgrender +
                '<div class="news_cnt">' +
                '<span class="news_attr"><img src="' +
                source_logo +
                '"/ alt="Article Image">&nbsp;&nbsp;&nbsp;<a href="' +
                link +
                '">' +
                source +
                '</a></span>' +
                '<div class="news_title"><a href="' +
                link +
                '">' +
                title +
                '</a></div>' +
                '<span class="news_time" data-time="' +
                news_time.a +
                '">' +
                news_time.b +
                '</span></a></div>'
            document.getElementById('news').prepend(innerDiv)
        }
        function render_gnews(answer) {
            let parser = new DOMParser()
            const doc = parser.parseFromString(answer, 'text/html')
            const articles = doc.querySelectorAll('article')
            const urlChecklist = []

            function fixImageUrl(url) {
                if (!url) return null

                // Remove any localhost references
                url = url.replace(/http:\/\/localhost:3000/, '')

                // If it's already an absolute URL, return it
                if (url.startsWith('http://') || url.startsWith('https://')) {
                    return url
                }

                // Remove any double slashes (except for protocol)
                url = url.replace(/([^:]\/)\/+/g, '$1')

                // For /api/attachments paths, use the direct path
                if (url.includes('/api/attachments/')) {
                    return `https://news.google.com${url}`
                }

                // For relative paths
                if (url.startsWith('./')) {
                    return `https://news.google.com${url.substring(1)}`
                }

                if (url.startsWith('/')) {
                    return `https://news.google.com${url}`
                }

                return `https://news.google.com/${url}`
            }

            articles.forEach(function (node) {
                try {
                    var item = parser.parseFromString(
                        node.innerHTML,
                        'text/html'
                    )

                    // Get time
                    const timeElement =
                        item.querySelector('time') ||
                        item.querySelector('.WW6dff')
                    const news_time = timeElement
                        ? {
                              a: timeElement.getAttribute('datetime') || '',
                              b:
                                  timeElement.innerHTML ||
                                  timeElement.textContent
                          }
                        : null

                    // Get link
                    const linkElement =
                        item.querySelector('a[href*="article"]') ||
                        item.querySelector('h3 a') ||
                        item.querySelector('h4 a') ||
                        item.querySelector('a[href*="news"]')

                    var link = linkElement?.href || null
                    if (link) {
                        // Make sure link is absolute
                        link = fixImageUrl(link)
                        urlChecklist.push(link)
                    }

                    // Get image
                    var imageSRC = null
                    const image =
                        item.querySelector('img[src*="article"]') ||
                        item.querySelector('figure img') ||
                        item.querySelector('.Quavad') ||
                        item.querySelector('img')

                    if (image?.src) {
                        imageSRC = fixImageUrl(image.src)
                    }

                    // Get source image
                    let sourceImage =
                        item.querySelector('img[src*="favicon"]')?.src ||
                        item.querySelector('div.wsLqz > img')?.src ||
                        false

                    if (sourceImage) {
                        sourceImage = fixImageUrl(sourceImage)
                    }

                    // Get title
                    const titleElement =
                        item.querySelector('h3') ||
                        item.querySelector('h4') ||
                        item.querySelector('h5') ||
                        item.querySelector('.DY5T1d')

                    const mainArticle = {
                        title:
                            titleElement?.innerText ||
                            titleElement?.textContent ||
                            false,
                        link: link,
                        image: imageSRC,
                        source:
                            item.querySelector('a.wEwyrc')?.innerText ||
                            item.querySelector('.UPsHc')?.innerText ||
                            item.querySelector('.MgUUmf')?.innerText ||
                            false,
                        source_image: sourceImage,
                        time: news_time?.b || false
                    }

                    // Only add complete articles
                    if (mainArticle.title && mainArticle.link && news_time) {
                        add_gnews(
                            mainArticle.title,
                            news_time,
                            mainArticle.source,
                            mainArticle.source_image,
                            mainArticle.link,
                            mainArticle.image
                        )
                    }
                } catch (error) {
                    console.warn('Failed to parse article:', error)
                }
            })

            // Cleanup
            const loadingSVG = document.querySelector('.loading-svg')
            if (loadingSVG) {
                loadingSVG.remove()
            }

            // Cache if function exists
            if (typeof fc_ns === 'function') {
                fc_ns()
            }
        }
        console.log('News locale is ' + localStorage.newsLe)
        //Function to load news
        function loadGNews() {
            if (shouldIC()) {
                document.getElementById('news').innerHTML == ''
            }
            if (
                document.getElementById('news').innerHTML == '' ||
                Date.now() / 1000 - localStorage.cachedNewsUpdate > 3600 ||
                forceReload
            ) {
                forceReload = false
                console.log('Fetching news..')
                render_news_loading()
                try {
                    fetch(newsServer + localStorage.newsLe, {
                        method: 'GET',
                        mode: 'cors'
                    })
                        .then(function (response) {
                            if (response.url.includes('&ceid=')) {
                                localStorage.newsLe = response.url.substr(
                                    response.url.lastIndexOf('?')
                                )
                            }
                            return response.text()
                        })
                        .then(function (answer) {
                            render_gnews(answer)
                            localStorage.cachedNewsUpdate = Date.now() / 1000
                        })
                        .catch(function (e) {
                            console.log('error fetch', e)
                        })
                } catch (err) {
                    console.log('Fetch generic news failed for: ' + err.message)
                }
            }
        }
        const locales = {
            'English | Australia': '?hl=en-AU&gl=AU&ceid=AU:en',
            'English | Botswana': '?hl=en-BW&gl=BW&ceid=BW:en',
            'English | Canada': '?hl=en-CA&gl=CA&ceid=CA:en',
            'English | Ethiopia': '?hl=en-ET&gl=ET&ceid=ET:en',
            'English | Ghana': '?hl=en-GH&gl=GH&ceid=GH:en',
            'English | India': '?hl=en-IN&gl=IN&ceid=IN:en',
            'English | Indonesia': '?hl=en-ID&gl=ID&ceid=ID:en',
            'English | Ireland': '?hl=en-IE&gl=IE&ceid=IE:en',
            'English | Israel': '?hl=en-IL&gl=IL&ceid=IL:en',
            'English | Kenya': '?hl=en-KE&gl=KE&ceid=KE:en',
            'English | Latvia': '?hl=en-LV&gl=LV&ceid=LV:en',
            'English | Malaysia': '?hl=en-MY&gl=MY&ceid=MY:en',
            'English | Namibia': '?hl=en-NA&gl=NA&ceid=NA:en',
            'English | New Zealand': '?hl=en-NZ&gl=NZ&ceid=NZ:en',
            'English | Nigeria': '?hl=en-NG&gl=NG&ceid=NG:en',
            'English | Pakistan': '?hl=en-PK&gl=PK&ceid=PK:en',
            'English | Philippines': '?hl=en-PH&gl=PH&ceid=PH:en',
            'English | Singapore': '?hl=en-SG&gl=SG&ceid=SG:en',
            'English | South Africa': '?hl=en-ZA&gl=ZA&ceid=ZA:en',
            'English | Tanzania': '?hl=en-TZ&gl=TZ&ceid=TZ:en',
            'English | Uganda': '?hl=en-UG&gl=UG&ceid=UG:en',
            'English | United Kingdom': '?hl=en-GB&gl=GB&ceid=GB:en',
            'English | United States': '?hl=en-US&gl=US&ceid=US:en',
            'English | Zimbabwe': '?hl=en-ZW&gl=ZW&ceid=ZW:en',
            'Bahasa Indonesia | Indonesia': '?hl=id&gl=ID&ceid=ID%3Aid',
            'Čeština | Česko': '?hl=cs&gl=CZ&ceid=CZ%3Acs',
            'Deutsch | Deutschland': '?hl=de&gl=DE&ceid=DE%3Ade',
            'Deutsch | Österreich': '?hl=de&gl=AT&ceid=AT%3Ade',
            'Deutsch | Schweiz': '?hl=de&gl=CH&ceid=CH%3Ade',
            'Español | Argentina': '?hl=es-419&gl=AR&ceid=AR%3Aes-419',
            'Español | Chile': '?hl=es-419&gl=CL&ceid=CL%3Aes-419',
            'Español | Colombia': '?hl=es-419&gl=CO&ceid=CO%3Aes-419',
            'Español | Cuba': '?hl=es-419&gl=CU&ceid=CU%3Aes-419',
            'Español | Estados Unidos': '?hl=es-419&gl=US&ceid=US%3Aes-419',
            'Español | México': '?hl=es-419&gl=MX&ceid=MX%3Aes-419',
            'Español | Perú': '?hl=es-419&gl=PE&ceid=PE%3Aes-419',
            'Español | Venezuela': '?hl=es-419&gl=VE&ceid=VE%3Aes-419',
            'Français | Belgique': '?hl=fr&gl=BE&ceid=BE%3Afr',
            'Français | Canada': '?hl=fr-CA&gl=CA&ceid=CA:fr',
            'Français | France': '?hl=fr&gl=FR&ceid=FR%3Afr',
            'Français | Maroc': '?hl=fr&gl=MA&ceid=MA%3Afr',
            'Français | Sénégal': '?hl=fr&gl=SN&ceid=SN%3Afr',
            'Français | Suisse': '?hl=fr&gl=CH&ceid=CH%3Afr',
            'Italiano | Italia': '?hl=it&gl=IT&ceid=IT%3Ait',
            'Latviešu | Latvija': '?hl=lv&gl=LV&ceid=LV%3Alv',
            'Lietuvių | Lietuva': '?hl=lt&gl=LT&ceid=LT%3Alt',
            'Magyar | Magyarország': '?hl=hu&gl=HU&ceid=HU%3Ahu',
            'Nederlands | België': '?hl=nl&gl=BE&ceid=BE%3Anl',
            'Nederlands | Nederland': '?hl=nl&gl=NL&ceid=NL%3Anl',
            'Norsk | Norge': '?hl=no&gl=NO&ceid=NO%3Ano',
            'Polski | Polska': '?hl=pl&gl=PL&ceid=PL%3Apl',
            'Português | Brasil': '?hl=pt-BR&gl=BR&ceid=BR%3Apt-419',
            'Português | Portugal': '?hl=pt-PT&gl=PT&ceid=PT%3Apt-150',
            'Română | România': '?hl=ro&gl=RO&ceid=RO%3Aro',
            'Slovenčina | Slovensko': '?hl=sk&gl=SK&ceid=SK%3Ask',
            'Slovenščina | Slovenija': '?hl=sl&gl=SI&ceid=SI%3Asl',
            'Svenska | Sverige': '?hl=sv&gl=SE&ceid=SE%3Asv',
            'Tiếng Việt | Việt Nam': '?hl=vi&gl=VN&ceid=VN%3Avi',
            'Türkçe | Türkiye': '?hl=tr&gl=TR&ceid=TR%3Atr',
            'Ελληνικά | Ελλάδα': '?hl=el&gl=GR&ceid=GR%3Ael',
            'Български | България': '?hl=bg&gl=BG&ceid=BG%3Abg',
            'Русский | Россия': '?hl=ru&gl=RU&ceid=RU%3Aru',
            'Русский | Украина': '?hl=ru&gl=UA&ceid=UA%3Aru',
            'Српски | Србија': '?hl=sr&gl=RS&ceid=RS%3Asr',
            'Українська | Україна': '?hl=uk&gl=UA&ceid=UA%3Auk',
            'עברית | ישראל': '?hl=he&gl=IL&ceid=IL%3Ahe',
            'العربية | الإمارات العربية المتحدة': '?hl=ar&gl=AE&ceid=AE%3Aar',
            'العربية | المملكة العربية السعودية': '?hl=ar&gl=SA&ceid=SA%3Aar',
            'العربية | لبنان': '?hl=ar&gl=LB&ceid=LB%3Aar',
            'العربية | مصر': '?hl=ar&gl=EG&ceid=EG%3Aar',
            'मराठी | भारत': '?hl=mr&gl=IN&ceid=IN%3Amr',
            'हिन्दी | भारत': '?hl=hi&gl=IN&ceid=IN%3Ahi',
            'বাংলা | বাংলাদেশ': '?hl=bn&gl=BD&ceid=BD%3Abn',
            'தமிழ் | இந்தியா': '?hl=ta&gl=IN&ceid=IN%3Ata',
            'മലയാളം | ഇന്ത്യ': '?hl=ml&gl=IN&ceid=IN%3Aml',
            'తెలుగు | భారతదేశం': '?hl=te&gl=IN&ceid=IN%3Ate',
            'ไทย | ไทย': '?hl=th&gl=TH&ceid=TH%3Ath',
            '中文 | 中国': '?hl=zh-CN&gl=CN&ceid=CN:zh-Hans',
            '中文 | 台灣': '?hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
            '中文 | 香港': '?hl=zh-HK&gl=HK&ceid=HK%3Azh-Hant',
            '한국어 | 대한민국': '?hl=ko&gl=KR&ceid=KR%3Ako'
        }
        if (!localStorage.newsLe)
            localStorage.newsLe = '?hl=en-US&gl=US&ceid=US:en'
        document.getElementById('newsL').value = localStorage.newsLe
        //Add options for news locale
        const sel = document.getElementById('newsL')
        if (sel.options.length < 20) {
            for (var el in locales) {
                var opt = document.createElement('option')
                opt.appendChild(document.createTextNode(el))
                opt.value = locales[el]
                sel.appendChild(opt)
                if (locales[el] == localStorage.newsLe) opt.selected = true
            }
        }
        preconnectTo(newsServer)
        loadGNews()
        //Add swipe to delete on news items
        window.setTimeout(function () {
            f_astd()
        }, 1000)
        window.setTimeout(function () {
            f_astd()
        }, 2000)
    }
    //End of News Section Widget Config

    //Config widgets ordering and toggle
    Sortable.create(document.getElementById('stt_lwo'), {
        handle: '.stt_lwoh',
        animation: 150,
        onEnd: function (evt) {
            var list = document
                .getElementById('stt_lwo')
                .getElementsByTagName('li')
            for (var z = 0; z < list.length; z++) {
                var y = parseInt(list[z].getAttribute('data-order'))
                ntp_sett.order[y] = z
                orderListChanged = 1
            }
            load_widgets()
            ls_set('ntp_sett', ntp_sett)
            if (ntp_sett.status[0]) {
                f_setup_sb()
            }
            if (ntp_sett.status[1]) {
                needReload = true
            }
            wait(100)
        }
    })

    function toggle_widget(i) {
        var y = ntp_sett.order[i]
        var status = ntp_sett.status[i] == 1 ? 0 : 1
        console.log(
            ' Widget : ' +
                i +
                ' Order : ' +
                y +
                ' Status :' +
                ntp_sett.status[i] +
                ' - >' +
                status
        )
        ntp_sett.status[i] = status
        document.getElementById('wdg_' + y).style.display = status
            ? 'block'
            : 'none'

        document.getElementById('wdg_' + y).innerHTML = status
            ? ntp_wdg[i].cached
            : ''

        ls_set('ntp_sett', ntp_sett)
        if (ntp_sett.status[i] && i == 1) f_setup_gtiles()
        if (ntp_sett.status[i] && i == 0) f_setup_sb()
    }
    //End of Config widgets ordering and toggle

    //********* BG Wallpaper */
    const wDevice = window.innerWidth ? window.innerWidth : screen.width
    const hDevice = window.innerHeight ? window.innerHeight + 56 : screen.height
    const bg_pld = document.getElementById('bg_pld'),
        crop = document.getElementById('crop'),
        result = document.getElementById('result'),
        imgRes = document.getElementById('imgRes'),
        crpp = document.getElementById('croppie')
    var cr,
        cr_img = '',
        img_w = wDevice / 2.5,
        img_h = hDevice / 2.5,
        isCrop = 0
    while (img_w > 670) {
        img_w = img_w / 1.2
        img_h = img_h / 1.2
    }
    ntp_bdy.style.setProperty('--bg-cw', img_w + 'px')
    ntp_bdy.style.setProperty('--bg-ch', img_h + 'px')

    //Background input value
    const wllp_value = document.getElementById('wllp_value')
    //Input file for background
    const wllp_file = document.getElementById('wllp_file')
    const wllp_url = document.getElementById('wllp_url')
    const wllp_gradient = document.getElementById('wllp_gradient')
    const wllp_bg = document.getElementById('wllp_bg')
    const wllp_custom = document.getElementById('wllp_custom')
    const wllp_clearvalue = document.getElementById('wllp_clearvalue')
    const wllp_default = document.getElementById('wllp_default')

    wllp_value.value =
        ntp_theme == 'dark'
            ? getComputedStyle(document.body).getPropertyValue('--bg-img-d')
            : getComputedStyle(document.body).getPropertyValue('--bg-img-l')

    function savebg_cropped() {
        wllp_value.value = 'url(' + imgRes.src + ')'
        ntp_bdy.style.setProperty('--bg-img-l', 'url(' + imgRes.src + ')')
        ntp_bdy.style.setProperty('--bg-img-d', 'var(--bg-img-l)')
        ntp_bdy.style.setProperty('--bg-cl', '#fff')
        save_ntpbdy()
        ntoast.success(' Background saved')
        cropCancel()
    }
    function f_wallp1() {
        var file = wllp_file.files[0]
        const fileSizeInMB = file.size / (1024 * 1024) // Convert bytes to MB
        if (fileSizeInMB > 2) {
            alert('Please upload an image that is less than 2MB in size.')
            return
        }
        if (file && file.type.match('image.*')) {
            var reader = new FileReader()
            reader.onload = function (e) {
                console.log(e.target.result)
                bg_pld.style.display = 'none'
                if (cr_img == '') {
                    cr_img = e.target.result
                    cropInit()
                } else {
                    cr_img = e.target.result
                    bindCropImg()
                }
                crop.style.display = 'inline'
            }
            reader.readAsDataURL(file)
        }
    }
    function f_wallp2() {
        var url = prompt('Enter URL of the wallpaper. \nExample: ', 'url')
        var img = new Image()
        img.crossOrigin = 'Anonymous'

        img.onload = function (e) {
            // Check if the image size exceeds 2 MB
            if (img.src.length > 2 * 1024 * 1024) {
                alert('Image size exceeds 2 MB. Please choose a smaller image.')
                return
            }

            bg_pld.style.display = 'none'

            if (cr_img == '') {
                cr_img = img.src
                cropInit()
            } else {
                cr_img = img.src
                bindCropImg()
            }

            crop.style.display = 'inline'
        }

        img.src = url
    }

    function f_wallp3() {
        var rg = random_gradient()
        ntp_bdy.style.setProperty(
            '--bg-img-' + (ntp_theme == 'dark' ? 'd' : 'l'),
            rg
        )
        wllp_value.value = rg
        save_ntpbdy()
        ntoast.success('Gradient background saved')
    }
    function f_wallp4() {
        var v = wllp_value.value
        console.log(v, ntp_theme)
        ntp_bdy.style.setProperty(
            '--bg-img-' + (ntp_theme == 'dark' ? 'd' : 'l'),
            v
        )
        ntp_bdy.style.setProperty(
            '--bg-c' + (ntp_theme == 'dark' ? 'd' : 'l'),
            v
        )
        save_ntpbdy()
        ntoast.success('Background value saved')
    }
    function f_wallp5() {
        var v =
            ntp_theme == 'dark'
                ? 'url("../assets/nextntpbg_d.svg")'
                : 'url("../assets/nextntpbg.svg")'
        wllp_value.value = v
        ntp_bdy.style.setProperty(
            '--bg-img-' + (ntp_theme == 'dark' ? 'd' : 'l'),
            v
        )
        save_ntpbdy()
        ntoast.success('Default background saved')
    }

    wllp_file.addEventListener('change', f_wallp1)
    wllp_url.addEventListener('click', f_wallp2)
    wllp_gradient.addEventListener('click', f_wallp3)
    wllp_bg.addEventListener('click', f_cp_bg)
    wllp_custom.addEventListener('click', f_wallp4)
    wllp_clearvalue.addEventListener('click', () => {
        document.getElementById('wllp_value').value = ''
    })
    wllp_default.addEventListener('click', f_wallp5)

    //********* Cropping  *********/
    function cropInit() {
        cr = new Croppie(crpp, {
            viewport: {
                width: img_w,
                height: img_h
            },
            boundary: {
                width: img_w,
                height: img_h
            },
            mouseWheelZoom: false,
            enableOrientation: true
        })
        bindCropImg()
    }

    function bindCropImg() {
        cr.bind({
            url: cr_img
        })
    }

    function cropCancel() {
        if (bg_pld.style.display == 'none') {
            bg_pld.style.display = 'inline'
            crop.style.display = 'none'
            result.style.display = 'none'
            wllp_file.value = ''
            isCrop = 0
        }
    }

    function cropResult() {
        if (!isCrop) {
            isCrop = 1
            cr.result({
                type: 'base64', // canvas(base64)|html
                size: '{width:wDevice, height:hDevice}',
                format: 'jpeg', //'jpeg'|'png'|'webp'
                quality: 1 //0~1
            }).then(function (resp) {
                crop.style.display = 'none'
                imgRes.src = resp
                result.style.display = 'inline'
            })
        }
    }
    document.getElementById('b_cc').onclick = () => {
        cropCancel()
    }
    document.getElementById('b_cc2').onclick = () => {
        cropCancel()
    }
    document.getElementById('b_cr').onclick = () => {
        cropResult()
    }
    document.getElementById('b_sbgc').onclick = () => {
        savebg_cropped(this)
    }

    //********  Color picker ******/
    var cp_current_el
    var cp_type
    var current_color
    var initial_color
    var picker = new Picker({
        parent: document.querySelector('#cp_v'),
        popup: false
    })
    function f_cp_mtc(a) {
        cp_type = a
        picker.setColor(cp_type == 'mtcl' ? mtc.light : mtc.dark, true)
        dlg_color_picker.show()
    }

    function f_cp_bg() {
        cp_type = 'bgc' + (ntp_theme == 'dark' ? 'd' : 'l')
        let color = getComputedStyle(ntp_bdy).getPropertyValue(
            '--bg-c' + (ntp_theme == 'dark' ? 'd' : 'l')
        )
        picker.setColor(color, true)
        save_ntpbdy()
        dlg_color_picker.show()
    }
    function f_cp_sb() {
        cp_type = 'sb_preview_c'
        let color = getComputedStyle(ntp_bdy).getPropertyValue('--sb_preview_c')
        picker.setColor(color, true)
        dlg_color_picker.show()
    }

    function f_cp_rgb(type, number) {
        cp_current_el = number
        cp_type = 'color_' + type
        current_color = getComputedStyle(ntp_bdy).getPropertyValue(
            '--c' + (cp_type == 'color_cl' ? 'l' : 'd') + number
        )
        console.log('f_rgb - cp_type : ' + cp_type, ' color : ' + current_color)
        picker.setColor(current_color, true)
        dlg_color_picker.show()
    }

    dlg_color_picker.on('hide', () => {
        try {
            picker.setColor('#00000000', true)
        } catch (error) {
            console.error(`Failed to reset color: ${error}`)
        }
        current_color = initial_color
    })

    picker.onChange = (color) => {
        current_color = color.hex
    }
    // Log the color value when clicking the OK button
    document.getElementById('cp_ok').addEventListener('click', () => {
        console.log(
            ' OK - cp_type : ',
            cp_type,
            ' cp number: ',
            cp_current_el,
            ' color : ',
            current_color
        )
        if (cp_type == 'color_cl' || cp_type == 'color_cld') {
            ntp_bdy.style.setProperty(
                '--c' + (cp_type == 'color_cl' ? 'l' : 'd') + cp_current_el,
                current_color
            )
        } else if (cp_type == 'sb_preview_c') {
            ntp_bdy.style.setProperty('--sb_preview_c', current_color)
        } else if (cp_type == 'bgcl' || cp_type == 'bgcd') {
            ntp_bdy.style.setProperty(
                '--bg-img-' + (cp_type == 'bgcl' ? 'l' : 'd'),
                'none'
            )
            ntp_bdy.style.setProperty(
                '--bg-c' + (cp_type == 'bgcl' ? 'l' : 'd'),
                current_color
            )
            ntoast.success('Background color saved')
        } else if (cp_type == 'mtcl' || cp_type == 'mtcd') {
            document.getElementById('sett_' + cp_type).style.background =
                current_color
            mtc[cp_type == 'mtcl' ? 'light' : 'dark'] = current_color
            if (
                (cp_type == 'mtcl' && ntp_theme == 'light') ||
                (cp_type == 'mtcd' && ntp_theme == 'dark')
            )
                document
                    .querySelector('meta[name=theme-color]')
                    .setAttribute('content', current_color)
            ls_set('ntp_mtc', mtc)
        }
        save_ntpbdy()
        dlg_color_picker.hide()
    })

    var stt_cl = document.querySelectorAll('.stt_clfrt:not(.not_stt)')
    stt_cl.forEach((el) => {
        var s = el.id
        var s1 = s.split('_')
        el.addEventListener('click', function () {
            if (s1[2]) f_cp_rgb(s1[1], parseInt(s1[2]))
            else f_cp_mtc(s1[1])
        })
    })
    document
        .querySelector('#sb_icon_preview_c')
        .addEventListener('click', () => {
            f_cp_sb()
        })

    const tg_r77 = document.getElementById('tg_r77')
    const tg_r77vs = document.getElementById('tg_r77v')
    var tg_r77v = parseInt(
        ntp_bdy.style.getPropertyValue('--bg-blur').replace('px', '')
    )
    tg_r77vs.innerText = tg_r77v
    if (isNaN(tg_r77v)) {
        tg_r77v = 0
        tg_r77vs.innerText = tg_r77v
        ntp_bdy.style.setProperty('--bg-blur', tg_r77v + 'px')
        save_ntpbdy()
    }
    tg_r77.value = tg_r77v
    tg_r77.addEventListener('input', function () {
        tg_r77v = parseInt(tg_r77.value)
        tg_r77vs.innerText = tg_r77v
        ntp_bdy.style.setProperty('--bg-blur', tg_r77v + 'px')
        save_ntpbdy()
    })

    const tg_r777 = document.getElementById('tg_r777')
    const tg_r777vs = document.getElementById('tg_r777v')
    var tg_r777v = parseInt(
        ntp_bdy.style.getPropertyValue('--bg-dark').replace('%', '')
    )
    tg_r777vs.innerText = tg_r777v
    if (isNaN(tg_r777v)) {
        tg_r777v = 100
        tg_r777vs.innerText = tg_r777v
        ntp_bdy.style.setProperty('--bg-dark', tg_r777v + '%')
        save_ntpbdy()
    }
    tg_r777.value = tg_r777v
    tg_r777.addEventListener('input', function () {
        tg_r777v = parseInt(tg_r777.value)
        tg_r777vs.innerText = tg_r777v
        ntp_bdy.style.setProperty('--bg-dark', tg_r777v + '%')
        save_ntpbdy()
    })

    var ls_size = ls_get('ls_size')
    const size_p = document.getElementById('size_progress')

    function gen(n) {
        return new Array(n * 1024 + 1).join('a')
    }

    function set_maxSize() {
        var size
        // Determine size of localStorage if it's not set
        if (!localStorage.getItem('ls_size')) {
            var i = 0
            try {
                // Test up to 10 MB
                for (i = 0; i <= 10000; i += 250) {
                    ls_set('test', gen(i))
                }
            } catch (e) {
                localStorage.removeItem('test')
                ls_set('ls_size', i ? i - 250 : 0)
            }
        }
        size = localStorage.getItem('ls_size')
        document.getElementById('size').innerHTML = size
        size_p.setAttribute('maxValue', size)
    }

    function get_usedSize() {
        var _lsTotal = 0,
            _xLen,
            _x
        for (_x in localStorage) {
            if (!Object.prototype.hasOwnProperty.call(localStorage, _x)) {
                continue
            }
            _xLen = (localStorage[_x].length + _x.length) * 2
            _lsTotal += _xLen
        }
        var total = (_lsTotal / 1024).toFixed(0)
        document.getElementById('size_used').innerHTML = total
        size_p.setAttribute('value', total)
    }
    if (ls_size == undefined) {
        get_usedSize()
        set_maxSize()
    } else {
        document.getElementById('size').innerHTML = ls_get('ls_size')
        get_usedSize()
    }
    document.getElementById('size_calc').onclick = () => {
        get_usedSize()
        set_maxSize()
    }
}
