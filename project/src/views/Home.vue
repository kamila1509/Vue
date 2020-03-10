<template>
  <div class="home full-height">
   <transition :name="transitionName.body" appear>
    <div class="home-container full-height flexbox"> 
      <Photo/>
      <div class="home-title">
        <h1 >I'm Camila!</h1>
      <h2> a Front-End Developer</h2>
      </div>
      
    </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState,mapActions} from "vuex";
import Photo from '@/components/Photo.vue'

export default {
  name: 'Home',
  components: {
    Photo
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
    this.setTransitionName({'body':'slide-back'})
  }
}
</script>
<style lang="less">
.flexbox{
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
}
.full-height{
  height: 100%;
}

.home-title{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-left: 20px;
  h1{
    font-size: 50px;
  }
  h2{
    font-size: 30px;
  }
}
</style>