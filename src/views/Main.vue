<template>
    <div class="mainlist font-custom">
        <h1 class="text-4xl border-b-2 border-black p-2">New Arrivals</h1>
        <div class="grid md:grid-cols-5 md:gap-10 m-10 ">
            <!-- <div v-for="(item,index) in imageTest" :key="`imageTest-${index}`">
                <img :src="item"/>
            </div> -->
            <div  v-for="(item,index) in info"  :key="item.productId">
                <router-link :to="{ name: 'Product', params: { getproductId: item.productId } }">
                <img :src="imageTest[index]"  width="500" height="400" class="mx-auto shadow-lg w-60 h-60"/>
                <p class="pt-2">{{ item.productName }}</p>
                <p>${{ item.productPrice}}</p>
                </router-link>
            <button ><img src="../assets/icon/color-pencil.png" width="40" height="40"></button>
            <button @click="deleteRoom(item.productId)"><img src="../assets/icon/trash.png" width="45" height="45"></button>
            </div>
        </div>

    </div>
    <router-view></router-view>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            info:[],
            ImageP:null,
            imageTest:[]
           
    }},
  name: 'Main',

  methods:{
        async deleteRoom(id){
            console.log(id)
            await axios.delete(`http://localhost:5000/UserAccount/${id}`);
            this.info = this.info.filter( info => info.id !== id );
        },
        async getImage(){
            
                const itemmap = this.info.map((number) => { return number.productId})
                for (let index = 0; index < itemmap.length; index++) {
                const imageresponse = await axios.get(`http://localhost:8081/image/get/${itemmap[index]}`, {responseType: 'arraybuffer'}).then(response => new Buffer(response.data, 'binary').toString('base64'))
                const dataImage = `data:image/png;base64,${imageresponse}`
                this.imageTest.push(dataImage) 
                }
        }
  }
  ,
  async created() {
    try {
      const response = await axios.get(`http://localhost:8081/api/products/all`)
      this.info = response.data
    this.getImage()
    } catch (e) {
        console.log(e)
    }
  }
}

</script>

