<template>
    <div>
        <div class="photo-profile">
        <img src="../assets/profile.jpeg">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Photo'
 
}
</script>

<style lang="less" scoped>
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