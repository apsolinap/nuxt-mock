<template>
    <div class="prefecture-btn">
        <NuxtLink :to="`/area_search/prefecture_code=${prefecture.id}&name=${prefecture.prefecture}`" class="btn btn-dark">
            <div class="d-flex justify-content-between">
                <span class="prefecture-text">
                    {{ prefecture.prefecture }}
                </span>
                <span class="arrow">
                    ➤
                </span>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        props: ['prefecture'],
    }
</script>

<style scoped>
     .btn {
         border-radius: 2px;
        max-width: 120px;
        min-width: 120px;
        width:120px;
        height: 40px;
        text-align: left;
    }
    .arrow {
        display: block;
    }
    .prefecture-text {
        display: block;
        text-align: left;
    }
</style>