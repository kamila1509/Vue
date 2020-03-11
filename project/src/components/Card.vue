<template>
    <div class="card">
      <div class="card_image"> 
      <img src="https://image.shutterstock.com/image-vector/vector-collection-web-development-shield-260nw-174708794.jpg" /> 
      </div>
      <div class="card_title title-white">
      <p>Card Title</p>
      </div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
    name:'Card',
    computed: {
        ...mapState({
            transitionName: (state)=> state.app.transitionName
        })
    },
    methods: {
        ...mapActions({
            setTransitionName: 'app/setTransitionName'
        })
    },
    created() {
        this.setTransitionName({'body':'slide-down'})
    },
}
</script>

<style lang="less">
.card {
  display: inline-block;
  margin: 30px 20px;
  width: 250px;
  height: 250px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: fill;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -55px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: #2c3e50;
}


</style>