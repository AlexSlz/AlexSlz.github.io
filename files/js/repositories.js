const hideReposByName = ['AlexSlz.github.io']

class Icon {
  constructor(name, text) {
    this.name = name
    this.text = text
  }
}

var Icons = [
  new Icon('Ant_Algorithm_Unity', 'fas fa-cog'),
  new Icon('CaptScr', 'fas fa-file-image'),
  new Icon('udp_client-server_parser', 'fas fa-server'),
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
