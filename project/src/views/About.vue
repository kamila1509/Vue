<template>
<div class="container">
  <div class="about">
    <Photo/>
    <h1 class="about-title">What can I do?</h1>
  </div>
  <div class="cards-lists">
    <Card/>
    <Card/>
    <Card/>
  </div>
</div>
  
</template>

<script>
import Photo from '@/components/Photo.vue'
import Card from '@/components/Card.vue'
export default {
  name:'About',
  components:{
    Photo,
    Card
  }
}
</script> 

<style lang="less">
.about{
  display: flex;
  justify-content: space-around;
  margin: 0 80px;
} 
.about-title{
  flex-grow: 2;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>