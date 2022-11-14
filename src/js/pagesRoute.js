export function pagesRoute() {
  const link = Array.from(document.querySelectorAll('[topage]'))
  if (link) {
    const navigate = (id) => {
      var activePage = document.querySelector('section.page-active')
      var activeLink = document.querySelector('[topage].active')
      if (activePage) activePage.classList.remove('page-active')
      if (activeLink) activeLink.classList.remove('active')
      var nextPage = document.querySelector(id)
      var nextLink = document.querySelector("[topage='" + id + "']")
      if (nextPage) nextPage.classList.add('page-active')
      if (nextLink) nextLink.classList.add('active')
    }
    link.forEach(function (page) {
      var id = page.getAttribute('topage')
      page.addEventListener('click', function () {
        navigate(id)
      })
    })
  }
}
