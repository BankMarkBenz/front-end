<template>
    <div class="mainlist font-custom">
        <h1 class="text-4xl border-b-2 border-black p-2">New Arrivals</h1>
        <div class="grid md:grid-cols-5 md:gap-10 m-10 ">
            <div  v-for="item in info"  :key="item.id">
                <p @click="deleteRoom($event)">{{ item.UserName }}</p>
                <p>{{ item.Status}}</p>
            <button ><img src="../assets/icon/color-pencil.png" width="40" height="40"></button>
            <button @click="deleteRoom(item.id)"><img src="../assets/icon/trash.png" width="45" height="45"></button>
            </div>
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
        async deleteRoom(id){
            console.log(id)
            await axios.delete(`http://localhost:5000/UserAccount/${id}`);

            this.info = this.info.filter( info => info.id !== id );
        }
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:5000/UserAccount`)
      this.info = response.data
    } catch (e) {
        console.log(e)
    }
  }
}

</script>

