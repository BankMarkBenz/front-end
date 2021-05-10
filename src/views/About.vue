<template>

    <navibar></navibar>
    <div class="font-custom">
    <h1 class="text-4xl mx-10 py-2 pb-10 pt-16">About</h1>
    <grid class="grid-rows-2">
        <img class="md:col-start-3" width="300" height="300" src="../assets/icon/favicon-32x32.png">
        <div class="md:row-start-2 md:col-start-2 md:col-span-3 shadow-2xl border-black border-2 p-10 pt-4 rounded-3xl ">
          <p class="text-2xl">เกี่ยวกับเรา</p>
          <p class="text-lg ">BMShop เป็นแพลตฟอร์มอีคอมเมิร์ซ B2C ระหว่างประเทศที่เกี่ยวกับแฟชั่นที่รวดเร็ว บริษัทเราให้ความสำคัญกับเสื้อผ้าของผู้หญิงเป็นหลัก แต่ก็มีเสื้อผ้าผู้ชาย เสื้อผ้าเด็ก เครื่องประดับ รองเท้า กระเป๋าและสินค้าแฟชั่นอื่น ๆ BMShop มุ่งเน้นไปที่ยุโรป อเมริกา ออสเตรเลีย และตะวันออกกลางเป็นส่วนใหญ่ ยังพร้อมกับตลาดผู้บริโภคอื่น ๆ แบรนด์นี้ก่อตั้งขึ้นในเดือนตุลาคม 2551 และตั้งแต่นั้น บริษัทเราก็ยึดถือคำขวัญที่ว่า "ทุกคนสามารถเพลิดเพลินกับความงามของแฟชั่น" ธุรกิจของเราครอบคลุมประเทศและภูมิภาคมากกว่า 220 ทั่วโลก</p>
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
