<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link class="u-item u-home" to="/">
        <img src="./assets/nav-home.png" class="icon">
        <p class="text">首页</p>
      </router-link>
      <router-link class="u-item u-creator" to="/creator">
        <img src="./assets/nav-creator.png" class="icon">
        <p class="text">创作人</p>
      </router-link>
      <router-link class="u-item u-story" to="/story">
        <img src="./assets/nav-story.png" class="icon">
        <p class="text">故事</p>
      </router-link>
      <router-link class="u-item u-me" to="/me">
        <img src="./assets/nav-me.png" class="icon">
        <p class="text">我的</p>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import './lib/base.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 1.1rem;
  line-height: 1.1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  .u-item {
    flex: 1;
    position: relative;
    z-index: 2;
    color: #7b7b7b;
    font-size: .2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      display: block;
    }
    .text {
      margin-top: .08rem;
      line-height: 1.4;
    }
  }
  .u-home .icon{
    width: .47rem;
    height: .48rem;
  }
  .u-creator .icon{
    width: .45rem;
    height: .45rem;
  }
  .u-story .icon{
    width: .41rem;
    height: .42rem;
  }
  .u-me .icon{
    width: .44rem;
    height: .46rem;
  }
  &:after {
    background: linear-gradient(white, #d1cfcf);
    filter: blur(10px);
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: 1;
  }
}
</style>
