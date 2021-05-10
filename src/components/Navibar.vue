<template>
      <div class="home p-2 bg-black text-white">
    <div class="grid grid-cols-8 font-Italiana items-stretch  eiei">
        
        <router-link to="/" class="col-start-1 col-span-3 font-medium text-5xl">BMShop</router-link>
        <router-link to="/AddItem" class="col-start-6 self-center  text-3xl cool-link">Add</router-link>
        <router-link to="/Team" class="col-start-7 self-center  text-3xl cool-link">Team</router-link>
        <router-link to="/About" class="col-start-8 self-center  text-3xl cool-link">About</router-link>
       </div>
  </div>
</template>

<script>
export default {
    name:'Navibar'
}
</script>