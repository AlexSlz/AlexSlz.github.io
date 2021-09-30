const loader = document.getElementById('loader1')

window.addEventListener('load', function () {
  setTimeout(() => {
    startAnimation1()
  }, 1000)
})

function startAnimation1() {
  loader.classList.add('startAnimation1')
  for (var i = 0; i < loader.children.length; i++) {
    loader.children[i].classList.add('startAnimation1')
  }
  setTimeout(() => {
    loader.remove()
  }, 2000)
}

var imageApp = new Vue({
  el: '#bg',
  data: {
    imgCount: 39,
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
