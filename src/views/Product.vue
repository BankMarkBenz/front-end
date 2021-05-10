<template>
    <navibar></navibar>
    <div class="add">
        <div class="grid md:grid-cols-6 md:gap-10 m-10 mt-20 font-custom justify-items-stretch">
            <div class="img col-span-3 hellowww " >
                <img :src="ImageP" width="500" height="400" class="mx-auto shadow-lg mb-5"/>
            </div>
            <div class="col-span-2 text-left">
                <p class="text-4xl">{{ product.productName }}</p>
                <p class="text-lg text-gray-500">{{ productBrand.brandName }}</p>
                <p class="text-3xl">$ {{ Number(product.productPrice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
                <p class="text-2xl py-4 border-black border-b-2">Color</p>
                <ul v-for="color in product.productColors" :key="color.colorId" class="inline-block">
                    <div class="p-2 pt-6">
                         <p class="rounded-full h-24 w-24 dot " :style="{ 'background-color': color.colorValue}"></p>
                         <p class="text-center text-base">{{ color.colorName }}</p>
                    </div>
                </ul>
                <p class="text-2xl py-4 border-black border-b-2">Description</p>
                <p class="p-2 pt-6">Manufactureddate : {{ product.productManufactureddate}}</p>
                <p class="p-2 pt-2">{{ product.productDescription}} </p>
            </div>
        </div>
    </div>
</template>
<style scoped> 
.dot {
  height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

</style>
<script>
import Navibar from '../components/Navibar.vue';
const axios = require("axios");
export default {
  components: { Navibar },
    name:'Product',
    props: {
    getproductId: {
      type: String,
      required: false,
      default: ''
    },
    },
    data(){
        return{
          baseURL:'http://dev.bankandmark.codes/backend/',
            productId: this.getproductId,
            productW:'w',
            product:[],
            productBrand:[],
            selectedFile: null,
            ImageP:null
        }

    }  ,
  async created() {
    try {
      const response = await axios.get(`${this.baseURL}api/products/show/${this.productId}`)
      const responseBrand = await axios.get(`${this.baseURL}api/brands`)
      const BrandRawData = responseBrand.data
      const productRawData = response.data
      this.ImageP = `${this.baseURL}image/get/${this.productId}`
      this.product = productRawData
      this.productBrand = BrandRawData.filter( productBrands => productBrands.brandId == this.product.brandId )[0]
    } catch (e) {
        console.log(e)
    }
  }
}
</script>
