<template>

<header class="font-Italiana sm:flex sm:justify-between p-2 border-black border-b-2">

      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <router-link to="/" class="h-9 ml-10 text-5xl">BMShop</router-link>
        </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-while focus:text-white focus:bg-gray-600">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="!isOpen" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path v-if="isOpen" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
        </button>
      </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <router-link to="/AddItem" class="mt-1 mx-2 block px-10 py-1 text-black rounded hover:bg-gray-400 hover:text-white text-3xl ">Add</router-link>
        <router-link to="/Team" class="mt-1 mx-2 block px-10 py-1 text-black rounded hover:bg-gray-400 hover:text-white text-3xl ">Team</router-link>
        <router-link to="/About" class="mt-1 mx-2 block px-10 py-1 text-black rounded hover:bg-gray-400 hover:text-white text-3xl ">About</router-link>
      </div>
      </header>

</template>

<script>
export default {

    name:'Navibar',

    data(){
      return{
        isOpen:false
      }
    }
}
</script>