import Vue from 'vue'
import App from './App.vue'
import router from './router'
import EventEmit from 'eventemitter3'
// import VConsole from 'vconsole';

// new VConsole();

Vue.config.productionTip = false

Vue.prototype.EventEmit = new EventEmit()

Vue.prototype.notify = function(msg) {
  const container = document.createElement('div')
  container.setAttribute('style', `transition: opacity .5s;-webkit-transition: opacity .5s;opacity: 0;position: fixed;bottom: 2rem;left: 0;right: 0;margin: auto;width: 4rem;height: 1rem;line-height: 1rem;text-align: center;background: rgba(0,0,0,.8);color: white;font-size: .3rem;border-radius: .5rem;`)
  container.innerHTML = `<div class="u-notify J_notify" style=""><p>${msg}</p></div>`
  document.body.appendChild(container)
  setTimeout(() => {
    container.style.opacity = 1
  }, 100)
  setTimeout(() => {
    container.style.opacity = 0
    setTimeout(() => {
      document.body.removeChild(container)
    }, 600)
  }, 3200)
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
