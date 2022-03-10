<template>
    <div class="container">
        <div class="top-result d-flex justify-content-between align-items-center">
            <div class="col">
                <h3>検索結果</h3>
            </div>
            <div  v-if="results" class="d-flex align-items-center col" >
                <Pagination/>
            </div>
            <div class="col"> 
                <b-form-select v-model="selected" :options="options" ></b-form-select>
            </div>
        </div>
        <hr>
        <div v-if="results">
            <ResultCard
                v-for="e in results"
                :key="e.id"
                :estate="e"/>
            <Pagination/>
        </div> 
        <div v-else>
            No results.
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
        return {
            selected: null,
            options: [
            { value: null, text: '新着順' },
            { value: 'a', text: '賃料が安い順' },
            { value: 'b', text: '賃料が高い順' },
            { value: 'c', text: '面積が広い順' },
            { value: 'd', text: '面積が狭い順' }
            ]
        }
        },
        computed: {
            results() {
                let prefecture_id = (this.$route.params.transactions.split('&')[0]).split('=')[1];
                let transaction_id = (this.$route.params.transactions.split('&')[2]).split('=')[1];
                
                let result = this.$store.getters.getRealEstate(prefecture_id, transaction_id)
                if (result.length === 0){
                    return false;
                } else {
                    return result;
                }
            }
        }
    }
</script>

<style scoped>
    .dropdown {
        outline-color: black;
    }
    .top-result {
        display: flex;
    }
    @media screen and (max-width: 768px) { 
        .top-result {
            flex-direction: column;
        } 
    }
</style>