const pages = [
  document.getElementById('mainPage'),
  document.getElementById('repositoriesPage'),
]

function RenderPage(page) {
  if (page.className == 'hide') page.className = ''
  pages.forEach(function (page2) {
    if (page != page2) page2.className == 'hide'
  })
}
