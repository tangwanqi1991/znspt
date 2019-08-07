<template>
    <div id="app">
        <vue-circle
                :progress="76"
                :size="100"
                :reverse="false"
                line-cap="round"
                :fill="fill"
                empty-fill="rgb(10, 43, 91)"
                :animation-start-value="0.0"
                :start-angle="0"
                insert-mode="append"
                :thickness="10"
                :show-percent="true"
                @vue-circle-progress="progress"
                @vue-circle-end="progress_end">
        </vue-circle>
    </div>
</template>

<script>
    import VueCircle from 'vue2-circle-progress'
    export default {
        components: {
            VueCircle
        },
        data(){
            return{
                fill : { gradient: ["#57ca4a", "#56b26c", "#5486ac"] },
            }
        },
        methods:{
            progress(event,progress,stepValue){
                console.log(stepValue);
            },
            progress_end(event){
                console.log("Circle progress end");
            }
        }
    }
</script>

<style scoped>

</style>