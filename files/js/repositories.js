const hideReposByName = ['AlexSlz.github.io']

class namedText {
  constructor(name, text) {
    this.name = name
    this.text = text
  }
}

const Icons = [
  new namedText('Ant_Algorithm_Unity', 'fas fa-cog'),
  new namedText('CaptScr', 'fas fa-file-image'),
  new namedText('udp_client-server_parser', 'fas fa-server'),
  new namedText('FrogAndApple', 'fas fa-gamepad'),
  new namedText('snakeCplusplus', 'fas fa-gamepad'),
]
const Link = [
  new namedText('FrogAndApple', 'https://alexslz.github.io/FrogAndApple/'),
  new namedText(
    'Ant_Algorithm_Unity',
    'https://alexslz.github.io/Ant_Algorithm_Unity/'
  ),
]

var reposApp = new Vue({
  el: '#repositories',
  data: {
    displayCountRepos: levelApp.needExp,
    allRepos: [],
    url: {
      repos: 'https://api.github.com/users/AlexSlz/repos',
    },
  },
  created: function () {
    this.getRepos()
  },
  methods: {
    getRepos() {
      this.clearRepos()
      axios.get(this.url.repos).then((response) => {
        response.data.forEach((element) => {
          let isThere = false
          hideReposByName.forEach((elem) => {
            if (elem == element.name) isThere = true
          })
          if (!isThere) {
            element.prop = 'icon'
            Icons.forEach((elem) => {
              if (elem.name == element.name) {
                element.icon = elem.text
              }
            }) //element.html_url + '/blob/master/icon.txt?raw=true'
            Link.forEach((link) => {
              if (link.name == element.name) {
                element.link = link.text
              }
            })
            if (element.description == null) {
              element.description = 'Empty description :('
            }
            this.allRepos.push(element)
          }
        })
      })
    },
    clearRepos() {
      this.allRepos = []
    },
  },
})
