<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">Who I am </router-link> 
      <router-link to="/work">I'd like to</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
.slide-enter {
    transform: translateX(100%);
    &[direction=back] {
      transform: translateX(-100%);
    }
  }
  .slide-enter-to {
    transform: translateX(0);
  }

  .slide-leave { opacity:  1 }
  .slide-leave-to { opacity:0 }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .25s ease
  }

  .slide-next-enter-active,
  .slide-next-leave-active,
  .slide-back-enter-active,
  .slide-back-leave-active,
  .slide-down-enter-active,
  .slide-down-leave-active,
  .slide-up-enter-active,
  .slide-up-leave-active
   { transition: all .5s ease }
  .slide-next-enter {
    transform: translateX(100%);
  }
  .slide-next-enter-to {
    transform: translateX(0);
  }
  .slide-back-enter {
    transform: translateX(-100%);
  }
  .slide-back-enter-to {
    transform: translateX(0);
  }

  .slide-down-enter {
    transform: translateY(-100px);
    opacity: .25;
  }
  .slide-down-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .slide-up-enter {
    transform: translateY(100px);
    opacity: .25;
  }
  .slide-up-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .4s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: .25;
  }
  .fade-enter-to, .fade-leave {
    opacity: 1;
  }

#app {
  font-family: 'Dancing Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image:url("back.jpg");
  background-size: cover;
  height: 100vh;
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
    transition:0.2s;
    &.router-link-exact-active {
      color: #e4515e;
      transform: translateY(-5px);
    }
  }
}
</style>
