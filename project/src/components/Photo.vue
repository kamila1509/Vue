<template>
    <div class="photo">
        <transition :name="transitionName.body" appear>
        <div class="photo-profile">
        <img src="../assets/lilo.jpeg">
        </div>
        </transition>
    </div>
</template>

<script>

import { mapState,mapActions} from "vuex";
export default {
  name: 'Photo',
  props:{
    location: String
  },
  computed:{
    ...mapState({
      transitionName:state =>state.app.transitionName
    }),
    
  },
  methods:{
    ...mapActions({
      setTransitionName:'app/setTransitionName'
    })
  },
  created(){
    this.setTransitionName({'body':'slide-down'})
  }
}
</script>

<style lang="less" scoped>
.photo{
    display: inline-flex;
    align-items: center;
    justify-content: center;
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