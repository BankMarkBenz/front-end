<template>
    <navibar></navibar>
    <div class="font-custom">
    <h1 class="text-4xl border-b-2 border-black p-2 pb-10 pt-16">Team</h1>
    <grid>
        <div class=" md:col-start-2 my-10">
            <img class="w-50 h-50" src="../assets/patsakorn.jpg">
            <p class="text-lg">Patsakorn Janthawong</p>
            <p class="text-lg">62130500065</p>
            <div class="">
            <a href="https://www.instagram.com/mmpsk_/"><img class="inline w-10 h-10" src="../assets/instagram.png"></a>
            <a href="https://www.facebook.com/pasikorn.jantatwong"><img class="inline w-10 h-10"  src="../assets/facebook.png"></a>
            </div>
        </div>
        <div class="md:col-start-4 my-10 ">
            <img class="w-50 h-50" src="../assets/jakkrapop.jpg">
            <p class="text-lg">Jakkra pop</p>
            <p class="text-lg">62130500065</p>
            <div class="">
            <a href="https://www.instagram.com/jakkerpop/"><img class="inline w-10 h-10" src="../assets/instagram.png"></a>
            <a href="https://www.facebook.com/onetwo.onetwo.b"><img class="inline w-10 h-10"  src="../assets/facebook.png"></a>
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
