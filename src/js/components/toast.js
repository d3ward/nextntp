export function toast(options = []) {
    var t = this
    const warnIcon =
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>'
    const successIcon =
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
    const infoIcon =
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>'
    const errorIcon =
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>'

    t.timeout = options.timeout || 3000
    t.autoClose = options.autoClose || true
    t.parent = document.querySelector('#nt1')
    t.position = t.parent.getAttribute('toast-pos')

    t.close = (el) => {
        el.classList.add('toast-out')
        setTimeout(() => {
            el.remove()
        }, 300)
    }
    t.setCloseOnClick = (toast) => {
        toast.addEventListener('click', () => {
            t.close(toast)
        })
    }
    t.setAutocloseTimeout = (toast, timeout) => {
        setTimeout(async () => {
            t.close(toast)
        }, timeout)
    }
    t.createItem = (message, type = '_', icon) => {
        var item = document.createElement('div')
        item.classList.add('toast-item')
        item.classList.add(type)
        item.setAttribute('role', 'status')
        item.setAttribute('aria-live', 'polite')
        item.innerHTML = icon + message + '</span>'
        return item
    }

    t.error = (txt) => t.showA(t.createItem(txt, 'error', errorIcon))
    t.warn = (txt) => t.showA(t.createItem(txt, 'warn', warnIcon))
    t.info = (txt) => t.showA(t.createItem(txt, 'info', infoIcon))
    t.success = (txt) => t.showA(t.createItem(txt, 'success', successIcon))
    t.show = (txt) => t.showA(t.createItem(txt))

    t.showA = (toast) => {
        const oldHeight = t.parent.offsetHeight
        if (oldHeight > screen.height) return
        t.parent.appendChild(toast)
        const newHeight = t.parent.offsetHeight
        const height = newHeight - oldHeight
        const sp = t.position.includes('top') ? '-' : '+'
        t.parent.animate(
            [
                { transform: `translateY(${sp}${height}px)` },
                { transform: 'translateY(0)' }
            ],
            { duration: 150, easing: 'ease-out' }
        )
        if (t.autoClose) t.setAutocloseTimeout(toast, t.timeout)
        t.setCloseOnClick(toast)
    }
}
