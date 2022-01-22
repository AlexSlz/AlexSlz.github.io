const pages = [document.getElementById('mainPage'), document.getElementById('repositoriesPage')]

function RenderPage(page) {
  if (page.className == 'hide') page.className = ''
  pages.forEach(function (page2) {
    if (page != page2) page2.className == 'hide'
  })
}

var imageApp = new Vue({
  el: '#bg',
  data: {
    imgCount: 77,
    renderImage: '',
    interval: null,
  },
  created: function () {
    this.setImg(-1)
    this.cycleImg(true, 15000)
  },
  methods: {
    setImg(yes) {
      var randInt = yes <= -1 ? Math.floor(Math.random() * (this.imgCount - 1)) + 1 : yes
      this.renderImage = 'background-image: url(files/img/' + randInt + '.jpg)'
    },
    cycleImg(yes, speed) {
      if (yes) {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this.setImg(-1)
        }, speed)
      } else {
        clearInterval(this.interval)
      }
    },
  },
})

const text = document.getElementById('text')
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')
const element = document.querySelectorAll('span')
for (let i = 0; i < element.length; i++) {
  element[i].style.animationDelay = i * 0.07 + 's'
}
