<template>
    <div class="prefecture-card card d-flex justify-content-center">
        <h5 class="card-header" :style="{'background-color':region.color}">{{ region.region}}</h5>
        <div class="card-body d-flex align-content-start flex-wrap">
            <PrefectureButton
                    v-for="p in getPrefecture"
                    :key="p.id"
                    :prefecture="p"
                    class="p-2"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['region'],
        computed: {
            getPrefecture() {
                return this.$store.getters.getPrefectureByRegion(this.region.id)
            }
        }
    }
    
</script>

<style scoped>
    .prefecture-card {
        max-width:20rem;
        min-width: 20rem;
        margin: 5px;
        min-height: 15rem;
    }
    .card-header{
        background-color: #5bc0de;
        text-align: center;
        color:white;
        font-weight: bold;
    }
    .red {
        background-color: red;
    }
    .pink {
        background-color: pink;
    }
    .card-body{
        background-color: #e8eded;
    }
    
</style>