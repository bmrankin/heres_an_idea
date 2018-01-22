<template>
    <div id="login">
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <div class="box">
                        <h2 class="is-size-2 has-text-centered">{{ msg }}</h2>
                        <div :class="['notification',{ 'is-primary' : (notification_class=='is-success'), 'is-warning' : (notification_class!='is-success') }]" v-if="show_notification">
                            <button  class="delete" @click="show_notification = !show_notification"></button>
                            <div v-html="notification_msg"></div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input type="text" class="input">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <!-- #TODO : Change to type password and handle show -->
                                <input type="text" class="input">
                            </div>
                        </div>
                        <div class="field">
                            <button class="button is-primary" @click="signIn()">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import {firebase} from '@/firebase'
  export default {
      name: 'login',
      data() {
          return {
              msg: 'Login',
              email: '',
              password: '',
              show_notification: true,
              notification_class: 'is-success',
              notification_msg: 'This is a message'
          }
      },
      methods: {
        signIn(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
              .then((user) => {
                this.show_notification = true
                this.notification_class = 'is-success'
                this.notification_msg = 'You are logged in!'
              })
              .catch((err) => {
                his.show_notification = true
                this.notification_class = 'is-warning'
                this.notification_msg = 'Oops. ' + err.message
              })
        }
      },
  }
</script>

<style>
  
</style>