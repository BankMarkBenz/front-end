<template>
    <navibar></navibar>
    <h1 v-if="putMethodCheck == 'true'" class="font-custom text-4xl  p-2 pb-10 pt-16">Edit Product</h1>
    <h1 v-else class="font-custom text-4xl  p-2 pb-10 pt-16">Add Product</h1>
    <Grid>
        <div class="col-start-2 col-span-1 md:col-start-1 md:col-span-2 ">
            <p v-if="errorValidate.errorImage" class="text-xl text-red-500">Product Image</p>
            <p v-else class="text-xl ">Product Image</p>
            <img  v-if="selectedFile" :src="imagePreview" height="400" width="400" class="mx-auto p-5  my-4">
            <img v-else class="mx-auto my-4 h-40 w-40  sm:h-96 sm:w-96" src="../assets/icon/whiteshirt.jpg" alt="Upload Image" height="400" width="400"/>
            <input @change="onFileChanged" class="hidden" id="upload-photo" type="file">
            <label for="upload-photo"  class="cursor-pointer border-green-500 border-2 mx-auto p-4 mt-2 hover:bg-green-500 hover:text-white" >Upload File</label>
        </div>
        <div class=" items-stretch self-center col-start-2 md:text-base grid-cols-2 grid-rows-18 grid md:grid-cols-3 md:col-start-3 md:col-span-3 md:gap-10 mt-5 md:grid-rows-8 md:m-4">

                <p v-if="errorValidate.errorName" class="self-center col-start-1 col-span-2 row-start-1 md:row-start-1 text-center md:col-auto text-xl text-red-500">ProductName  : </p>
                <p v-else class="self-center col-start-1 col-span-2 row-start-1 md:row-start-1 text-center md:col-auto text-xl ">ProductName :</p>
                <input  class="border-black  border-2 col-start-1 col-span-2 row-start-2 md:col-auto md:col-start-2 md:row-start-1" type="text" placeholder="Enter Product Name" v-model="productData.productName">
               
                <p v-if="errorValidate.errorBrand"  class="self-center col-start-1 row-start-3 col-span-2  md:col-auto md:col-start-1 md:row-start-2 text-center text-xl text-red-500">Brand  : </p>
                <p v-else class="self-center col-start-1 row-start-3 col-span-2  md:col-auto md:col-start-1 md:row-start-2 text-center text-xl">Brand  : </p>
                <select class="border-black  border-2 col-start-1 col-span-2 row-start-4  md:col-auto md:col-start-2 md:row-start-2" v-model="productData.brandId">
                    <option value="null" selected="selected">----ChooseBrand----</option>
                    <option v-for="brand in BrandArray" :key="brand.brandId" :value="brand.brandId">{{ brand.brandName }}</option>
                    
                </select>
                
                <p v-if="errorValidate.errorColor" class="self-center col-start-1 col-span-2 row-span-1  row-start-5 md:col-auto md:col-start-1 md:row-span-2 md:row-start-3 text-center text-xl text-red-500">Color  : </p>
                <p v-else class="self-center col-start-1 col-span-2 row-span-1  row-start-5 md:col-auto md:col-start-1 md:row-span-2 md:row-start-3 text-center text-xl">Color  : </p>
                <div class="col-start-1 col-span-2 row-start-6 row-span-4 md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-2" >
                    <div class="p-1 inline-block float-left  col-start-1  md:col-start-2" v-for="color in ColorArray" :key="color.colorId">
                    <input  class="p-1 drop-shadow-lg" type="checkbox" :id="color.colorId" :value="color" v-model="productData.productColors">
                    <label :style="{ 'color':color.colorValue }" class="p-1 drop-shadow-lg" :for="color">{{ color.colorName }}</label>
                    </div>
                </div>
                
                <p v-if="errorValidate.errorDescription" class="self-center col-start-1 col-span-2 row-auto row-start-10 md:col-auto md:col-start-1 md:row-span-2 md:row-start-5 text-center text-xl text-red-500 ">ProductDescription  : </p>
                <p v-else class="self-center col-start-1 col-span-2 row-auto row-start-10 md:col-auto md:col-start-1 md:row-span-2 md:row-start-5 text-center text-xl">ProductDescription  : </p>
                <textarea  class="col-start-1 col-span-2  row-start-11 row-span-2  md:col-start-2 md:col-span-2 md:row-start-5 md:row-span-2 border-black border-2" placeholder="Enter Product Description" v-model="productData.productDescription"></textarea>

                <p v-if="errorValidate.errorManufactureddate" class="self-center col-start-1 col-span-2 row-start-13 md:row-start-7 md:col-start-1 md:col-auto text-center text-xl text-red-500">Manufactureddate: </p>
                <p v-else class="self-center col-start-1 col-span-2 row-start-13 md:row-start-7 md:col-start-1 md:col-auto text-center text-xl">Manufactureddate: </p>
                <input class="col-start-1 row-start-14 col-span-2 md:col-auto md:col-start-2 md:row-start-7 border-black border-2" type="date" v-model="productData.productManufactureddate"/>

                <p v-if="errorValidate.errorPrice" class="self-center col-start-1 row-start-15 col-span-2  md:col-auto md:col-start-1 md:row-start-8 text-center text-xl text-red-500">ProductPrice : </p>
                <p v-else class="self-center col-start-1 row-start-15 col-span-2  md:col-auto md:col-start-1 md:row-start-8 text-center text-xl">ProductPrice : </p>
                <input class="col-start-1 col-span-2 row-start-16 md:col-start-2  md:col-auto md:row-start-8 border-black border-2" type="number" min="1" step="any" placeholder="Enter Product Price" v-model="productData.productPrice" />
        </div>
    
    </Grid>
    <base-button
        v-if="Oldproduct"
        :msg="'Update Data'"
        :bgcolor="'bg-green-500'"
        :hoverbg="'hover:bg-white'"
        :color="'text-white'"
        :hovercolor="'hover:text-black'"
        :bordercolor="'border-green-500'"
        :border="'border-2'"
        :padding="'p-4'"
        @click="putDataMethod"
    ></base-button>
    <base-button
        v-else
        :msg="'Upload Data'"
        :bgcolor="'bg-green-500'"
        :hoverbg="'hover:bg-white'"
        :color="'text-white'"
        :hovercolor="'hover:text-black'"
        :bordercolor="'border-green-500'"
        :border="'border-2'"
        :padding="'p-4'"
        @click="SubmitData"
        ></base-button>
</template>
<script>
import axios from 'axios'
import Navibar from '../components/Navibar.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
    name:'AddList',
    components: {Navibar, BaseButton },
    props:{
        OldproductId:{
            type:String,
            required:false,
            default:null
        },
        putMethodCheck:{
            type:String,
            required:false,
            default:'false'
        }
    }
    ,
    data(){
        return{
            baseURL:'http://dev.bankandmark.codes/backend/',


            imagePreview:null,
            selectedFile: null,
            
            allNameData:'',
            lastProductId:null,

            Oldproduct:null,

            productData:{
            productId:'',
            productName:'',
            brandId:'',
            productColors:[],
            productDescription:'',
            productManufactureddate:'',
            productPrice:'',
            },

            errorValidate:{
             errorName:false,
             errorBrand:false,
             errorColor:false,
             errorDescription:false,
             errorManufactureddate:false,
             errorPrice:false,
             errorImage:false
            },
            errorAlert:'',
            
            
            BrandArray:[],
            ColorArray:[],
            
        }
    },methods:{
        SubmitData:function(){
            this.resetError()
            this.checkError()
            if(this.errorAlert){
                alert(this.errorAlert)
            }else{
                this.sendData()
            }
        },
        UpdateData(){
        this.resetError()
        this.checkError()
        if(this.errorAlert){
                alert(this.errorAlert)
        }else{
            this.putDataMethod()
        }
        },
        checkError(){
            this.checkProductName()
            for(let v in this.productData){
                if(this.productData[v] == ''){
                    switch(v){
                        case 'productName':
                            this.errorValidate.errorName='Please Insert Product Name'
                            this.errorAlert = this.errorAlert+'Please Insert Product Name \r\n'
                            break;
                        case 'brandId':
                            this.errorValidate.errorBrand='Please choose Product Brand'
                            this.errorAlert = this.errorAlert+'Please choose Product Brand \r\n'
                            break;
                        case 'productColors':
                            this.errorValidate.errorColor='Please choose Product Color'
                            this.errorAlert = this.errorAlert+'Please choose Product Color \r\n'
                            break;
                        case 'productDescription':
                            this.errorValidate.errorDescription='Please Insert Product Description'
                            this.errorAlert = this.errorAlert+'Please Insert Product Description \r\n'
                            break;
                        case 'productManufactureddate':
                            this.errorValidate.errorManufactureddate='Please choose Product Manufactreddate'
                            this.errorAlert = this.errorAlert+'Please choose Product Manufactreddate \r\n'
                            break;
                        case 'productPrice':
                            this.errorValidate.errorPrice='Please Insert Product Price'
                            this.errorAlert = this.errorAlert+'Please Insert Product Price \r\n'
                            break;    
                    }
                }else if(v == 'productPrice'){
                    if(this.productData[v] <= 0){
                        this.errorValidate.errorPrice='Please Insert Product Price do not be negative. '
                            this.errorAlert = this.errorAlert+'Please Insert Product Price do not be negative \r\n'
                    }
                }
            }
            if(this.selectedFile == null){
                this.errorValidate.errorImage='Please Upload Product Image'
                this.errorAlert= this.errorAlert+'Please Upload Product Image \r\n'
            }

        },
        resetError(){
             this.errorValidate.errorName=false
             this.errorValidate.errorBrand=false
             this.errorValidate.errorColor=false
             this.errorValidate.errorDescription=false
             this.errorValidate.errorManufactureddate=false
             this.errorValidate.errorPrice=false
             this.errorValidate.errorImage=false
             this.errorAlert=''
        },
        onFileChanged (event) {
            this.selectedFile = event.target.files[0]
            console.log(this.selectedFile)
            const input = event.target;
             if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {this.imagePreview = e.target.result;}
                reader.readAsDataURL(input.files[0]);
             }},
        async sendData(){
            this.productData.productId = this.lastProductId+1
            await axios.post(`${this.baseURL}api/products/add`,this.productData)            
            console.log("Done send")
            this.sendImage()
            
        },
        async sendImage(){
           const formData = new FormData()
           formData.append('File', this.selectedFile)
           await axios.post(`${this.baseURL}image/add/${this.productData.productId}`,formData)
           location.reload();
        },
        showOldData(){
            console.log(this.Oldproduct)
            console.log(this.putMethodCheck)
        },
        checkProductName(){
            
          for(let v in this.allNameData){
              console.log(this.allNameData[v][1])
              if(this.productData.productName.toLowerCase() == this.allNameData[v][1].toLowerCase()){
                  if(this.productData.productId == this.allNameData[v][0]){
                    this.errorValidate.errorName = ''
                    this.errorAlert = this.errorAlert + ''
                  }else{
                      console.log(this.productData.productName.toLowerCase() +"||" +this.allNameData[v][1].toLowerCase())
                  this.errorValidate.errorName = 'This Product Name is used please use another name'
                  this.errorAlert = this.errorAlert + 'This Product Name is used please use another name \r\n'
                  }
                console.log("Hello22")
              }
          }
        },
        async checkEdit(){
            console.log("hello2")
            const OldproductResponse = await axios.get(`${this.baseURL}api/products/show/${this.OldproductId}`)
            this.Oldproduct = OldproductResponse.data

            this.selectedFile = `${this.baseURL}image/get/${this.OldproductId}`
            this.imagePreview = `${this.baseURL}image/get/${this.OldproductId}`

            console.log(this.selectedFile)
            console.log(this.imagePreview)

            this.productData = this.Oldproduct
            console.log(this.productData.productId)
        },
        async putDataMethod(){

            await axios.put(`${this.baseURL}api/products/edit/${this.productData.productId}`,this.productData)
            console.log("Done")
            if (this.selectedFile != `${this.baseURL}image/get/${this.OldproductId}` ) {
                this.putImage()
                console.log("put Image")
            }else{
                console.log("Dont put Image")
            }
        },
        async putImage(){
            const formData = new FormData()
            formData.append('File', this.selectedFile)
            console.log(formData)
            console.log(this.selectedFile)
            await axios.put(`${this.baseURL}image/edit/${this.productData.productId}`,formData)
            location.reload()
        }
},
  async created() {
    try {
      const Brandresponse = await axios.get(`${this.baseURL}api/brands`)
      this.BrandArray = Brandresponse.data

      const Colorresponse = await axios.get(`${this.baseURL}api/colors`)
      this.ColorArray = Colorresponse.data

      const lastProductIdresponse = await axios.get(`${this.baseURL}api/products/last`)
      this.lastProductId = lastProductIdresponse.data[0].productId

      const allNameResponse = await axios.get(`${this.baseURL}api/products/getAllName`)
      this.allNameData = allNameResponse.data

        console.log(this.putMethodCheck)

      if(this.putMethodCheck == 'true'){
          console.log("in")
          this.checkEdit()
      }
    } catch (e) {
        console.log(e)
    }
  }
}
</script>
