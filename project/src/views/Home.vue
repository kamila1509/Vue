<template>
  <div class="home">
     <div class="home-container flexbox"> 
    <Photo/>
      <h1 class="home-title">Welcome to my Page!</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'

export default {
  name: 'Home',
  components: {
    Photo
  }
}
</script>
<style lang="less" scoped>
.flexbox{
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
}
.home-title{
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 50px;
  margin-left: 20px;
}
</style>