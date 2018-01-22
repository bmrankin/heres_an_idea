<template>
    <div id="sign-in">
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
                            <label class="label">First Name</label>
                            <div class="control">
                                <input type="text" class="input" v-model="first_name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control">
                                <input type="text" class="input" v-model="last_name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input type="text" class="input" v-model="email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <!-- #TODO : handle show -->
                                <input type="password" class="input" v-model="password">
                            </div>
                        </div>
                        <div class="field">
                            <button class="button is-primary" @click="signUp()">
                                Sign Up
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
      name: 'sign-in',
      data() {
          return {
              msg: 'Sign Up',
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              show_notification: true,
              notification_class: 'is-success',
              notification_msg: 'This is a message'
          }
      },
      methods: {
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                this.show_notification = true
                this.notification_class = 'is-success'
                this.notification_msg = 'Your account has been created!'
            }).catch((err) => {
                this.show_notification = true
                this.notification_class = 'is-warning'
                this.notification_msg = 'Oops. ' + err.message
            })
        }
      },
  }
</script>

<style>
  
</style>