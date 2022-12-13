const { createApp } = Vue

createApp({
    data() {
      return {
        contact: false,
        email: false
      }
    },
    methods:{
      toggleContact(){
        this.contact = !this.contact
        this.email = !this.email
      },
    },
  }).mount('#app')