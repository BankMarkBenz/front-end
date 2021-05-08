<template>
        <div class="p-2">
        <div class="justify-self-center hidden sm:hidden md:block">
            <p class="text-2xl">Sort By</p>
            <ul class="pt-4">
                <li @click="sortMethod('ProductName')" class="mt-2 py-4 hover:border-black border-b-2">ProductName</li>
                <li @click="sortMethod('ProductPrice')" class="mt-2 py-4 hover:border-black border-b-2">ProductPrice</li>
                <li @click="sortMethod('Manufactureddate')" class="mt-2 py-4 hover:border-black border-b-2 ">Manufactureddate</li>
                <li @click="sortMethod('Rest')" class="mt-2 py-4 hover:border-black border-b-2 ">Reset</li>
            </ul>
        </div>
        <div class="block md:hidden sm:block">
            <p class="  text-2xl">Sort By</p>
            <div class="flex items-end">
            <select class=" p-0" name="sortValue" id="sort" v-model="selectsortValue"
              @change="sortMethod(selectsortValue)">
                  <option value="ProductName">ProductName</option>
                  <option value="ProductPrice">ProductPrice</option>
                  <option value="Manufactureddate">Manufactureddate</option>
            </select>
            </div>
        </div>
        </div>
</template>

<script>

export default{
    name:'SortBar',
    emits:['sort-page']
    ,methods:{
        sortMethod:function(path){
            switch(path){
                case 'ProductName':
                    this.$emit('sort-page','sortBy=productName')
                    break;
                case 'ProductPrice':
                    this.$emit('sort-page','sortBy=productPrice')   
                    break;
                case 'Manufactureddate':
                    this.$emit('sort-page','sortBy=productManufactureddate') 
                    break;
                case 'Rest':
                    this.$emit('sort-page','sortBy=productId')
                    break;
            }
        }
    }
}
</script>
