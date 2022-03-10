<template>
    <div class="result-container">
        <h3 class="result-title">{{estate.title}} {{estate.id}}</h3>
        <hr class="rounded">
        <div class="point-container">
            <div class="point text-wrap hidden-mobile">
                ポイント
            </div>
            <div class="point-text text-wrap flex-fill">
                {{estate.point}}
            </div>
        </div>
        <article class="search-result row d-flex">
            <div class="image-alignment flex-fill">
                <a href="#" title="Lorem ipsum" class="thumbnail"><img src="~~/assets/images/sample_house.jpg" alt="Lorem ipsum" /></a>
            </div>
            <div class="col-md-7 excerpet">
                <table class="table table-responsive table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row" class="table-active">賃料</th>
                            <td>{{estate.rent}}</td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-active">所在地</th>
                            <td>{{estate.street}}</td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-active">面積</th>
                            <td>{{estate.area}}</td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-active">使用階/部屋番号</th>
                            <td>{{estate.floor_room_number}}</td>
                        </tr>
                        <tr>
                            <th scope="row" class="table-active">取引種別</th>
                            <td>{{estate.transaction_id | transaction_type }}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-2 d-flex justify-content-end align-items-end p-3">
                <button type="button" class="mt-auto btn btn-info flex-fill">詳細を見る</button>
			</div>
        </article>
    </div>
</template>

<script>
    export default {
        props: ['estate'],
        filters: {
            transaction_type: function (value) {
                console.log(value)
                switch(value){
                    case '1': value = '管理'; break;
                    case '2': value = 'サプリース'; break;
                    case '3': value = '幹等'; break;
                    default: value = '取引種別ありません'; break;
                }
                return value;
            }
        }
    }
</script>

<style scoped>

    .result-container {
        background-color:white;
        padding: 20px;
        margin: 10px
    }
    .result-title {
        padding-top:5px;
    }
    .point-container {
        padding: 0px 0px 20px 0px;
        display: flex;
    }
    img { 
        max-width: 220px;
    }
    
    th {
        font-weight: normal;
    }

    table {
        border: 1px;
    }

    td {
        width: 70%;
    }
    .point {
        background-color:#5bc0de;
        color:white;
        padding: 5px;
        text-align: center;
    }
    .point-text {
        background-color: #e6f5fa;
        padding: 5px;
    }
    hr.rounded {
        border-top: 3px solid #5bc0de;
        border-radius: 5px;
    }
    .image-alignment {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
   
    @media (max-width: 820px) {
        .hidden-mobile {
            display: none;
        }
        .image-alignment {
            margin-left: 17px;
        }
        img {
            width:90%;
        }
    }
</style>