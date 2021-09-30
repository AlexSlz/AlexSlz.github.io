var levelApp = new Vue({
  el: '#levelApp',
  data: {
    needExp: 5,
    level: 0,
    experience: [],
    exp: 0,
  },
  methods: {
    setExpElement() {},
  },
})

setTimeout(() => {
  calcExperience()
}, 1200)

function calcExperience() {
  let needExpTemp = 0
  let reposCount = this.reposApp.allRepos.length
  for (let i = 0; i < needExpTemp + 1; i++) {
    if (reposCount >= needExpTemp) {
      needExpTemp += levelApp.needExp
      levelApp.level++
    }
    if (i > needExpTemp - levelApp.needExp) {
      levelApp.experience.push(i <= reposCount)
      if (i <= reposCount) levelApp.exp++
    }
  }
}
