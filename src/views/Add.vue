<template>
    <div class="add">
        <p>ssssssssssss</p>
        <p>{{ productW}}</p>
  <h1>{{ productId }}</h1>
    </div>
</template>

<script>

export default {
    name:'Add',
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
            productW:'w'
        }

    }
}
</script>
