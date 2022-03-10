<template>
    <div class="search">
        <div class="banner">
            <h3 class="text-center">完璧な家を見つけましょう。</h3>
        </div>
        <div class="container">
            <span class="arrow">
                ➤
            </span>
            <span class="search-text">
                都道府県を選択
            </span>
            <hr class="rounded">
            <div class="sub-text w-100">
                エリアから不動産物件を検索できます。都道府県を選択してください。
            </div>
            <div class="search-prefecture-card">
                <PrefectureCard
                    v-for="r in region"
                    :key="r.id"
                    :region="r"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
    export default {
        computed: {
            ...mapState([
                'region'
            ])
        },
    
    }
</script>

<style scoped>
    .sub-text {
        padding-bottom: 20px;
    }
    .arrow {
        color: #5bc0de;
    }
    .container {
        padding:20px;
    }
    .search-prefecture-card {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .text-center {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
    }
    .banner {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
        ), url('https://www.temponw.com/assets/consumer/img/GettyImages-1257010146.jpg');
        height: 200px;
        position: relative;
        text-align: center;
    }
    .btn {
        background-color:white;
    }
    .search {
        background-color:white;
    }
    hr.rounded {
        border-top: 3px solid #5bc0de;
        border-radius: 5px;
    }
</style>