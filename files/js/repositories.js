const hideReposByName = ['AlexSlz.github.io']

class reposClass {
  constructor(name, icon, ...args) {
    this.name = name
    this.icon = icon
    this.depend = args
  }
}

const reposAddons = [
  new reposClass('Ant_Algorithm_Unity', 'fas fa-cog', {
    name: 'Play',
    icon: 'fas fa-gamepad',
    link: 'https://alexslz.github.io/Ant_Algorithm_Unity/',
  }),
  new reposClass('CaptScr', 'fas fa-file-image'),
  new reposClass('udp_client-server_parser', 'fas fa-server'),
  new reposClass('FrogAndApple', 'fas fa-gamepad', {
    name: 'Play',
    icon: 'fas fa-gamepad',
    link: 'https://alexslz.github.io/FrogAndApple/',
  }),
  new reposClass('snakeCplusplus', 'fas fa-gamepad', {
    name: 'Download',
    icon: 'fas fa-save',
    link: 'https://github.com/AlexSlz/snakeCplusplus/raw/master/snakeGame.rar',
  }),
  new reposClass('pager', 'fas fa-pager'),
  new reposClass('ReplayAction', 'fas fa-camera', {
    name: 'Download',
    icon: 'fas fa-save',
    link: 'https://github.com/AlexSlz/ReplayAction/raw/master/ReplayAction.zip',
  }),
  new reposClass('TelegramSender', 'fab fa-telegram', {
    name: 'Wath',
    icon: 'fab fa-youtube',
    link: 'https://www.youtube.com/watch?v=fH6qhINDE6E',
  }),
]
//www.youtube.com/watch?v=fH6qhINDE6E
https: var reposApp = new Vue({
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
            element.prop = 'depend'
            reposAddons.forEach((item) => {
              if (item.name == element.name) {
                element.icon = item.icon
                if (item.depend !== undefined) {
                  element.depend = item.depend
                }
              }
            })
            /*
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
            */
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
