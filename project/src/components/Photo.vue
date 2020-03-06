<template>
    <div class="photo">
        <div class="photo-profile">
        <img src="../assets/lilo.jpeg">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Photo',
  props:{
    location: String
  }

 
}
</script>

<style lang="less" scoped>
.photo{
    display: inline-block;
    margin-right: 20px;
}
.photo-corners (@radius: 50%){
    border-radius: @radius;
    width: 300px;
    height: 300px;
}
.photo-profile{
 .photo-corners;
}
.photo-profile >img {
 .photo-corners;
}
</style>