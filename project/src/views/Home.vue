<template>
  <div class="home">
     <div> 
      <Photo/>
      <h1>Welcome to my Page</h1>
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
