//Alert component
export function alert(options) {
	var t = this
	t.count = 0
	t.timeout = options.timeout ? options.timeout : 3000
	t.autoClose = options.hasOwnProperty('autoClose') ? options.autoClose : true
	const close =
	  '<svg class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'
	t.container = document.querySelector('#nt1')
	t.close = function ($el) {
	  $el.classList.add('animate-out')
	  setTimeout(() => {
		$el.remove()
		t.count--
	  }, 300)
	}
	t.setCloseOnClick = function ($el) {
	  $el.addEventListener('click', function () {
		t.close($el)
	  })
	}
	t.setAutocloseTimeout = function ($el, timeout) {
	  setTimeout(function () {
		t.close($el)
	  }, timeout)
	}
	t.createItem = function (message, color) {
	  var item = document.createElement('div')
	  item.classList.add('notify-item')
	  item.classList.add(color)
	  var span = document.createElement('span')
	  span.textContent = message
	  item.appendChild(span)
	  t.count++
	  return item
	}
	t.error = function (txt) {
	  t.show(t.createItem(txt, 'error'))
	}
	t.warn = function (txt) {
	  t.show(t.createItem(txt, 'warn'))
	}
	t.info = function (txt) {
	  var l = t.createItem(txt, 'info')
	  t.show(l)
	}
	t.success = function (txt) {
	  var l = t.createItem(txt, 'success')
	  t.show(l)
	}
	t.show = function (l) {
	  console.log(t.autoClose)
	  if (t.autoClose) t.setAutocloseTimeout(l, t.timeout)
	  t.setCloseOnClick(l)
	  t.container.append(l)
	}
  }