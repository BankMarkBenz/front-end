<template>
    <navibar></navibar>
    <div class="font-custom">
    <h1 class="text-4xl  p-2  pt-16">Team</h1>
    <grid>
        <div class="sm:col-start-2 sm:col-span-2 md:col-start-2 md:col-auto p-5 my-10 shadow-2xl">
            <img alt="patsakorn" class="w-50 h-50 " src="../assets/patsakorn.jpg">
            <p class="text-lg">Patsakorn Janthawong</p>
            <p class="text-lg">62130500065</p>
            <div class="">
            <a href="https://www.instagram.com/mmpsk_/"><img alt="Instagram" class="inline w-10 h-10" src="../assets/instagram.png"></a>
            <a href="https://www.facebook.com/pasikorn.jantatwong"><img alt="facebook" class="inline w-10 h-10"  src="../assets/facebook.png"></a>
            </div>
        </div>
        <div class="sm:col-start-3 sm:col-span-2 md:col-start-4 md:col-auto p-5 my-10 shadow-2xl ">
            <img alt="Jakrapop" class="w-50 h-50" src="../assets/jakkrapop.jpg">
            <p class="text-lg">Jakkrapop Chivrarerk</p>
            <p class="text-lg">62130500108</p>
            <div class="">
            <a href="https://www.instagram.com/jakkerpop/"><img alt="Instagram" class="inline w-10 h-10" src="../assets/instagram.png"></a>
            <a href="https://www.facebook.com/onetwo.onetwo.b"><img alt="facebook" class="inline w-10 h-10"  src="../assets/facebook.png"></a>
            </div>
        </div>
        

    </grid>
    </div>
</template>
<script>
import Grid from '../components/Grid.vue'
import Navibar from '../components/Navibar.vue'

export default {
  components: { Navibar, Grid },

}
</script>
