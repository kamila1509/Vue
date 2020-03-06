<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/work">Work</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Dancing Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image:url("back.jpg");
  background-size: cover;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  display: flex;
  justify-content: flex-end;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 30px;
    font-size: 30px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #e4515e;
    }
  }
}
</style>
