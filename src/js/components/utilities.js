export function reset_page() {
    if (
        confirm(
            'This will restore NextNTP to default theme and delete all data. Are you sure you want to proceed?'
        )
    ) {
        localStorage.clear()
        location.reload()
    }
}

//Functions for localstorage set and get
export function ls_set(key, obj) {
    return window.localStorage.setItem(key, JSON.stringify(obj))
}
export function ls_get(key) {
    const value = window.localStorage.getItem(key)

    try {
        return JSON.parse(value)
    } catch (error) {
        if (value && typeof value === 'string') {
            return value
        }
        console.error('Error parsing value from local storage:', error)
        return null // or some other default/fallback value
    }
}
//Function that return random gradient

export function random_gradient() {
    var c1 = {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255)
    }
    var c2 = {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255)
    }
    c1.rgb = 'rgb(' + c1.R + ',' + c1.G + ',' + c1.B + ')'
    c2.rgb = 'rgb(' + c2.R + ',' + c2.G + ',' + c2.B + ')'
    return 'radial-gradient(at top left, ' + c1.rgb + ', ' + c2.rgb + ')'
}

export function getNewsServer() {
    try {
        if (typeof window.chrome.embeddedSearch == 'undefined') {
            console.log(
                'Oh , looks like window.chrome.embeddedSearch is undefined'
            )
            window.chrome = {
                embeddedSearch: {
                    newTabPage: {
                        isIncognito: false
                    }
                }
            }
            return 'https://chromecontentsuggestions-pa.kiwibrowser.com/testnews/'
        } else {
            return 'https://news.google.com/'
        }
    } catch (error) {
        return 'https://chromecontentsuggestions-pa.kiwibrowser.com/testnews/'
    }
}

export function get_root_domain(url) {
    return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('kiwi://', '')
        .replace('chrome://', '')
        .replace('chrome-extension://')
        .replace('www.', '')
        .replace(':', '')
        .split(/[/?#]/)[0]
}
export function fixURL(value) {
    if (
        value.indexOf('kiwi://') < 0 &&
        value.indexOf('chrome://') < 0 &&
        value.indexOf('chrome-extension://') < 0 &&
        value.indexOf('https://') < 0 &&
        value.indexOf('http://') < 0
    )
        return 'https://' + value
    return value
}

//Function to preconnect to an url
export function preconnectTo(url) {
    var hint = document.createElement('link')
    hint.rel = 'preconnect'
    hint.href = url
    document.head.appendChild(hint)
}

//Check if user is on touch enabled device
export function is_td() {
    try {
        document.createEvent('TouchEvent')
        return true
    } catch (e) {
        return false
    }
}

export function is_incognito() {
    try {
        return window.chrome.embeddedSearch.newTabPage.isIncognito
    } catch (error) {
        return false
    }
}

//Function to wait
export function wait(ms) {
    let start = new Date().getTime()
    let end = start
    while (end < start + ms) {
        end = new Date().getTime()
    }
}

export function getEventListeners() {
    const isTouchDevice = 'ontouchstart' in window

    const events = {
        start: isTouchDevice ? 'touchstart' : 'mousedown',
        move: isTouchDevice ? 'touchmove' : 'mousemove',
        end: isTouchDevice ? 'touchend' : 'mouseup'
    }

    return events
}

//Function to get default widgets
export function f_dwdg(i) {
    var chd
    switch (i) {
        case 0:
            chd =
                '<div id="sb_r"><img id="sb_logo" alt=""><div class="sb_wrap"><span id="sb_icon_default"></span><ul id="sb_icon_menu"> </ul>' +
                '<input name="sb_input" type="text" id="sb_input" size="50" spellcheck="false" ></div></div>'
            break
        case 1:
            chd =
                '<div id="tlg"><div class="tlg_item folder"><div class="tlg_img tlg_fld"><div class="tlg_item"><a class="tile_target" href="https://d3ward.github.io/toolz" rel="noreferrer"><img class="tlg_img" src="https://logos.kiwibrowser.com/toolz"/><span class="tlg_title">Toolz</span></a></div></div><span class="tlg_title">Folder</span></div><div class="tlg_item"><a class="tile_target" href="https://d3ward.github.io/" rel="noreferrer"><img class="tlg_img" src="https://logos.kiwibrowser.com/d3ward.github.io"/><span class="tlg_title">d3ward</span></a></div><div class="tlg_item"> <a class="tile_target" href="https://kiwibrowser.com" rel="noreferrer" > <img class="tlg_img" src="https://logos.kiwibrowser.com/kiwibrowser.com" alt=""/> <span class="tlg_title">Kiwi Browser</span></a></div><div class="tlg_item"><a class="tile_target" href="https://github.com/d3ward/nextntp" rel="noreferrer"><img class="tlg_img" src="https://logos.kiwibrowser.com/github.io"/><span class="tlg_title">NextNTP</span></a></div></div>'
            break
        case 2:
            chd =
                '<div id="newsS"><div id="news"></div><div id="newsMore"></div></div>'
            break
    }
    return chd
}
