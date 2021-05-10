<template>
    <button class=" mb-6 border-2 mx-auto " :class="[bgcolor,hoverbg,color,hovercolor,bordercolor,border,padding]">
     {{ msg }}</button>

</template>
<script>

export default {
    props:['msg','bgcolor','hoverbg','color','hovercolor','bordercolor','border','padding']

}
</script>
