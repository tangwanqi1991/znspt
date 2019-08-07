<template>
    <knob-control
            :min="0"
            :max="100"
            :size="100"

            :reverse="false"



            primary-color="#E844C3"
            secondary-color="#E7B6DC"
            text-color="#E844C3"
            v-model="detune"
    ></knob-control>




<!--primary-color   进度颜色
    secondary-color 内圈颜色
    text-color      字体颜色

-->


</template>

<script>
    /*圆形百分比*/
    import VueCircle from 'vue2-circle-progress'
    export default {
        name: "Uyx",
        components:{
            VueCircle
        },
        data(){
            return {
                detune: '59',

            }
        },

    }
</script>

<style scoped>

</style>