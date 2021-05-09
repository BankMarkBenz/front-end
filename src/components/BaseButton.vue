<template>
    <button class="p-4 mb-6 border-2 mx-auto " :class="[bgcolor,hoverbg,color,hovercolor,bordercolor,border]">
     {{ msg }}</button>

</template>
<script>

export default {
    props:['msg','bgcolor','hoverbg','color','hovercolor','bordercolor','border']

}
</script>
