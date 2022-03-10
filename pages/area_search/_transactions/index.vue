<template>
    <div>
        <div v-if="!transaction_id" class="search">
            <div class="banner">
                <h3 class="text-center">完璧な家を見つけましょう。</h3>
            </div>
            <div class="container">
                <span class="arrow">
                    ➤
                </span>
                <span class="search-text">
                    取引種別を選択
                    
                </span>
                <hr class="rounded">
                <div class="sub-text w-100">
                    取引種別から不動産物件を検索できます。取引種別を選択してください。
                </div>
                <div class="selection-container d-flex flex-wrap justify-content-center">
                    <div class="transaction p-2 col-sm-6">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </div>
                    <div class="search-btn p-2 col-sm-2">
                        <NuxtLink :to="`/area_search/${this.$route.params.transactions}&trans=${selected}`" class="btn btn-dark">
                            探す
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="search-container">
            <Results/>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                selected: 0,
                options: [
                { value: 0, text: 'すべて'},
                { value: 1, text: '管理' },
                { value: 2, text: 'サプリース' },
                { value: 3, text: '幹等'}
                ]
            }
        },
        
        computed: {
            transaction_id() {
                try{
                    let transaction = this.$route.params.transactions.split('&')[2];
                    return transaction.split('=')[1];
                }
                catch(err){
                    return false;
                };
            },
            prefecture_name() {
                 return this.$route.params.transactions.split('&')[1]
            },
            prefecture_id() {
                return this.$route.params.transactions.split('&')[0];
            }
        }
    }
</script>

<style scoped>
    .transaction {
        max-width: 500px;
        width: 500px;
    }
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
    .search {
        background-color:white;
        min-height: 800px;
    }
    hr.rounded {
        border-top: 3px solid #5bc0de;
        border-radius: 5px;
    }
    
    .search-container {
        min-height: 700px;
    }
    @media (max-width: 500px) {
        .btn {
            min-width: 200px;
            flex:wrap;
        }
    }
</style>