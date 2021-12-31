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

var imageApp = new Vue({
  el: '#bg',
  data: {
    imgCount: 69,
    renderImage: '',
  },
  created: function () {
    this.setImg(-1)
  },
  methods: {
    setImg(yes) {
      var randInt = yes <= -1 ? Math.floor(Math.random() * this.imgCount) : yes
      this.renderImage = 'background-image: url(files/img/' + randInt + '.jpg)'
    },
  },
})

const text = document.getElementById('text')
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')
const element = document.querySelectorAll('span')
for (let i = 0; i < element.length; i++) {
  element[i].style.animationDelay = i * 0.07 + 's'
}
