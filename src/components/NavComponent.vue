<template>
    <div id="nav-component">
        <div class="section">
            <div class="container">
                <a @click="logout()" class="button"></a>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { firebase } from '@/firebase'
  export default {
      name: 'nav-component',
      data() {
          return {
              
          }
      },
      methods: {
          logout(){
              firebase.auth().signOut()
                .then(() => {
                    this.$router.replace('login')
                })
          }
        
      },
  }
</script>

<style>
  
</style>