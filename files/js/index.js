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
