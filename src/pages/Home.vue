<template>
  <div class="home">
   <div class="section">
     <div class="columns">
       <div class="column is-half is-offset-one-quarter">
         <div class="box">
           <h2 class="is-size-2">{{ msg }}</h2>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is home'
    }
  }
}
</script>

<style>

</style>
