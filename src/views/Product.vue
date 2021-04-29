<template>
    <div class="add">
        <div class="grid md:grid-cols-6 md:gap-10 m-10 mt-20 font-custom justify-items-stretch">
            <div class="img col-span-3  ">
                <img src="../assets/Picture.png" width="400" height="700" class="mx-auto" />
            </div>
            <div class="col-span-2 text-left">
                <p class="text-4xl">{{ product.productName }}</p>
                <p class="text-lg text-gray-500">{{ productBrand.brandName }}</p>
                <p class="text-3xl">$ {{ product.productPrice }}</p>
                <p class="text-2xl py-4 border-black border-b-2">สี</p>
                <ul v-for="color in product.productColors" :key="color.colorId" class="inline-block">
                    <div class="p-2">
                         <p class="rounded-full h-24 w-24 dot " :style="{ 'background-color': color.colorValue}"></p>
                         <p class="text-center">{{ color.colorName }}</p>
                    </div>
                   
                </ul>
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
const axios = require("axios");
export default {
    name:'Product',
    props: {
    getproductId: {
      type: Number,
      required: false,
      default: null
    },
    },
    data(){
        return{
            productId: this.getproductId,
            productW:'w',
            product:[],
            productBrand:[]
        }

    }  ,
  async created() {
    try {
      const response = await axios.get(`http://localhost:8081/api/products/all`)
      this.product = response.data[0]
      this.productBrand = this.product.productBrands
    } catch (e) {
        console.log(e)
    }
  }
}
</script>
