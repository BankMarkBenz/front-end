<template>
<navibar></navibar>
    <div class="mainlist font-custom">
        <h1 class="text-4xl border-b-2 border-black p-2 pt-6">New Arrivals</h1>
        <Grid>
            <div class="col-start-2 col-span-4 md:col-start-1 md:col-auto">
            <SortBar @sort-page="setSortFillter"></SortBar>
            </div>
            <div class="md:text-base grid md:grid-cols-4 col-span-4 col-start-2 md:gap-10">
            <div class="py-1" v-for="(item,index) in ProductArray"  :key="item.productId">
                <router-link :to="{ name: 'Product', params: { getproductId: item.productId } }">
                <img :src="imageTest[index]" class="mx-auto shadow-lg sm:w-45 sm:h-45"/>
                <p class="pt-2">{{ item.productName }}</p>
                <p>${{ Number(item.productPrice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
                </router-link>
            <button ><img src="../assets/icon/color-pencil.png" width="35" height="35"></button>
            <button @click="deleteItem(item.productId)"><img src="../assets/icon/trash.png" width="35" height="35"></button>
            </div>
        </div>
        </Grid>
    </div>
    <router-view></router-view>
</template>

<script>
import Navibar from '../components/Navibar.vue';
const axios = require("axios");
import SortBar from '../components/SortBar.vue';
export default {
  components: { SortBar, Navibar },
    data(){
        return{
            ProductArray:[],
            ImageP:null,
            imageTest:[],
            sortFillter:[]
            ,imurl:'http://localhost:8080/image/get/9'
           
    }},
  name: 'Main',

  methods:{
        async deleteItem(id){
            console.log(id)
            await axios.delete(`http://localhost:8080/api/products/delete/${id}`);
            this.ProductArray = this.ProductArray.filter( ProductArray => ProductArray.productId !== id );
        },
        async getImage(){
                this.imageTest =[]
                const itemmap = this.ProductArray.map((number) => { return number.productId})
                for (let index = 0; index < itemmap.length; index++) {
                this.imageTest.push(`http://localhost:8080/image/get/${itemmap[index]}`) 
                }
        },
        setSortFillter(path){
            this.sortFillter = path
            this.getDataSort()
            this.getImage()
        },
        async getDataSort(){
            try {
                const response = await axios.get(`http://localhost:8080/api/products/all?${this.sortFillter}`)
                this.ProductArray = response.data
                this.getImage()
                } catch (e) {
                         console.log(e)
                }
        }
  }
  ,
  async created() {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/all?${this.sortFillter}`)
      this.ProductArray = response.data
    this.getImage()
    } catch (e) {
        console.log(e)
    }
  }
}

</script>

