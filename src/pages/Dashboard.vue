<template>
    <div id="newpage">
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
  import NavComponent from '@/components/NavComponent'
  export default {
      name: 'new-page',
      data() {
          return {
              msg: 'Dashboard'
          }
      },
      methods: {
        
      },
  }
</script>

<style>
  
</style>