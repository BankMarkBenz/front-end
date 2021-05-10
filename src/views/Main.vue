<template>
<navibar></navibar>
    <div class="mainlist font-custom">
        <h1 class="text-4xl border-black p-2 pb-10 pt-16">Product List</h1>
        <Grid>
            <div class="col-start-2 col-span-4 md:col-start-1 md:col-auto">
            <SortBar @sort-page="setSortFillter"></SortBar>
            <base-button  v-for="index in TotalPage" :key="index"
                    :msg="index"
                    :bgcolor="'bg-while'"
                    :hoverbg="'hover:bg-black'"
                    :color="'text-black'"
                    :hovercolor="'hover:text-white'"
                    :bordercolor="'border-black'"
                    :border="'border-1'"
                    :padding="'p-3'"
                    @click="setPage(index-1)"
            ></base-button>
            </div>
            <div class="md:text-base grid md:grid-cols-4 col-span-4 col-start-2 md:gap-10">
            <div class="py-1" v-for="(item,index) in ProductArray"  :key="item.productId">
                <router-link :to="{ name: 'Product', params: { getproductId: item.productId } }">
                <img alt="ProductImage" :src="imageTest[index]" class="mx-auto shadow-lg sm:w-45 sm:h-45"/>
                <p class="pt-2">{{ item.productName }}</p>
                <p>${{ Number(item.productPrice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
                </router-link>
                <div class="">
                    <router-link class="inline-block" :to="{name:'EditItem',params:{ OldproductId:item.productId,putMethodCheck:'true' }}"><img src="../assets/icon/color-pencil.png"  alt="EditButton" width="35" height="35"></router-link>
                    <button class="inline-block" @click="deleteItem(item.productId)"><img src="../assets/icon/trash.png" width="35" height="35" alt="DeleteButton"></button>
                </div>
            </div>
        </div>
        </Grid>
    </div>
    <router-view></router-view>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import Navibar from '../components/Navibar.vue';
const axios = require("axios");
import SortBar from '../components/SortBar.vue';
export default {
  components: { SortBar, Navibar, BaseButton },
    data(){
        return{
            baseURL:'http://dev.bankandmark.codes/backend/',
            pageOf:0,
            TotalPage:null,
            ProductArray:[],
            ImageP:null,
            imageTest:[],
            sortFillter:[],
            hellotest:[]
           
    }},
  name: 'Main',

  methods:{
        async deleteItem(id){
            if(confirm("Delete This Item ?")){
            await axios.delete(`${this.baseURL}api/products/delete/${id}`);
            this.ProductArray = this.ProductArray.filter( ProductArray => ProductArray.productId !== id );
            location.reload()
            }
        },
        async getImage(){
                this.imageTest =[]
                const itemmap = this.ProductArray.map((number) => { return number.productId})
                for (let v in itemmap) {
                this.imageTest.push(`${this.baseURL}image/get/${itemmap[v]}`) 
                }
        },
        setSortFillter(path){
            if(path == 'sortBy=productId'){
                this.pageOf=0
            }
            this.sortFillter = path
            this.getDataSort()
            this.getImage()
        },
        async getDataSort(){
            try {
                const response = await axios.get(`${this.baseURL}api/products/all?${this.pageOf}&${this.sortFillter}`)
                this.ProductArray = response.data['content']
                this.getImage()
                } catch (e) {
                         console.log(e)
                }
        },
        setPage(page){
            this.pageOf = `page=${page}`
            this.getDataSort()
            this.getImage()
        }
  }
  ,
  async created() {
    try {
      const response = await axios.get(`${this.baseURL}api/products/all?${this.sortFillter}`)
      this.ProductArray = response.data['content']
      this.TotalPage = response.data['totalPages']
    this.getImage()
    } catch (e) {
        console.log(e)
    }
  }
}

</script>

