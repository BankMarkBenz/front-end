<template>
      <div class="home p-2 bg-black text-white">
    <div class="grid grid-cols-8 font-custom gap-x-10  eiei">
        
        <router-link to="/" class="col-start-1 col-span-3 font-medium text-4xl">Admin Setting Menu</router-link>
        <router-link to="/AddItem" class="col-start-5  text-2xl cool-link">Add</router-link>
       </div>
  </div>
</template>

<script>
export default {
    name:'Navibar'
}
</script>