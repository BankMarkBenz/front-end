<template>
    <div class="mainlist font-custom">
        <h1>New Arrivals</h1>
        <div class="grid md:grid-cols-5 md:gap-10 mx-10 ">
            <div><p>BABABAB</p>
                <p>$199</p>
            <button><img src="../assets/icon/color-pencil.png" width="40" height="40"></button>
            <button><img src="../assets/icon/trash.png" width="45" height="45"></button>
            </div>
            <img src="../assets/logo.png">
            <img src="../assets/logo.png">
            <img src="../assets/logo.png">
            <img src="../assets/logo.png">
            <img src="../assets/logo.png">
        </div>

    </div>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            info:[]
        }
    },
  name: 'Main',
  methods:{
      async erqw(){
        await  axios.get('http://localhost:5000/posts')
      .then(response => (this.info = response))
       console.log("kuy")
        }
  },
       async wtf(){
           await this.erqw()
       } 
}

</script>

