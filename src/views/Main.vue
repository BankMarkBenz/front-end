<template>
    <div class="mainlist font-custom">
        <h1 class="text-4xl border-b-2 border-black p-2">New Arrivals</h1>
        <div class="grid grid-cols-1 md:grid-cols-5 md:gap-10 m-10 ">
            <div class="col-start-2 col-span-4 md:col-start-1 md:col-auto">
            <SortBar @sort-page="setSortFillter"></SortBar>
            </div>
            <div class="grid md:grid-cols-4 col-span-4 col-start-2 md:gap-10">
            <div class="py-1" v-for="(item,index) in info"  :key="item.productId">
                <router-link :to="{ name: 'Product', params: { getproductId: item.productId } }">
                <img :src="imageTest[index]" class="mx-auto shadow-lg sm:w-45 sm:h-45"/>
                <p class="pt-2">{{ item.productName }}</p>
                <p>${{ item.productPrice}}</p>
                </router-link>
            <button ><img src="../assets/icon/color-pencil.png" width="35" height="35"></button>
            <button @click="deleteRoom(item.productId)"><img src="../assets/icon/trash.png" width="35" height="35"></button>
            </div>
        </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
const axios = require("axios");
import SortBar from '../components/SortBar.vue';
export default {
  components: { SortBar },
    data(){
        return{
            info:[],
            ImageP:null,
            imageTest:[],
            sortFillter:[]
           
    }},
  name: 'Main',

  methods:{
        async deleteRoom(id){
            console.log(id)
            await axios.delete(`http://localhost:5000/UserAccount/${id}`);
            this.info = this.info.filter( info => info.id !== id );
        },
        async getImage(){
                this.imageTest =[]
                const itemmap = this.info.map((number) => { return number.productId})
                for (let index = 0; index < itemmap.length; index++) {
                const imageresponse = await axios.get(`http://localhost:8081/image/get/${itemmap[index]}`, {responseType: 'arraybuffer'}).then(response => new Buffer(response.data, 'binary').toString('base64'))
                const dataImage = `data:image/png;base64,${imageresponse}`
                this.imageTest.push(dataImage) 
                }
        },
        setSortFillter(path){
            this.sortFillter = path
            this.getDataSort()
            this.getImage()
            console.log(this.sortFillter)
        },
        async getDataSort(){
            try {
                const response = await axios.get(`http://localhost:8081/api/products/all?${this.sortFillter}`)
                this.info = response.data
                console.log(this.sortFillter)
                this.getImage()
                } catch (e) {
                         console.log(e)
                }
        }
  }
  ,
  async created() {
    try {
      const response = await axios.get(`http://localhost:8081/api/products/all?${this.sortFillter}`)
      this.info = response.data
      console.log(this.sortFillter)
    this.getImage()
    } catch (e) {
        console.log(e)
    }
  }
}

</script>

