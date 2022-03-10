export const state = () => ({
    region: [
        {
            id: 1,
            region: "中国",
            color: "#9eb8a0",
        },
        {
            id: 2,
            region: "北海道",
            color: "#a34b4b",
        },
        {
            id: 3,
            region: "四国",
            color: "#c297b8",
        },
        {
            id: 4,
            region: "九州・沖縄",
            color: "#e8864a",
        },
        {
            id: 5,
            region: "東北",
            color: "#8a58a1",
        },
        {
            id: 6,
            region: "関東",
            color: "#ffb94f",
        },
        {
            id: 7,
            region: "中部",
            color: "#99d1e7",
        },
        {
            id: 8,
            region: "近畿",
            color: "#705d56",
        }

    ],
    prefecture: [
        {
            id: 1,
            region: 2,
            prefecture: "北海道"
        },
        {
            id: 2,
            region: 1,
            prefecture: "鳥取県"
        },
        {
            id: 3,
            region: 1,
            prefecture: "島根県"
        },
        {
            id: 4,
            region: 1,
            prefecture: "岡山県"
        },
        {
            id: 5,
            region: 1,
            prefecture: "広島県"
        },
        {
            id: 6,
            region: 1,
            prefecture: "山口県"
        },
        
        {
            id: 7,
            region: 3,
            prefecture: "徳島県"
        },
        {
            id: 8,
            region: 3,
            prefecture: "香川県"
        },
        {
            id: 9,
            region: 3,
            prefecture: "愛媛県"
        },
        {
            id: 10,
            region: 3,
            prefecture: "高知県"
        },
        {
            id: 11,
            region: 4,
            prefecture: "福岡県"
        },
        {
            id: 12,
            region: 4,
            prefecture: "佐賀県"
        },
        {
            id: 13,
            region: 4,
            prefecture: "長崎県"
        },
        {
            id: 14,
            region: 4,
            prefecture: "熊本県"
        },
        {
            id: 15,
            region: 4,
            prefecture: "大分県"
        },
        {
            id: 16,
            region: 4,
            prefecture: "宮崎県"
        },
        {
            id: 17,
            region: 4,
            prefecture: "鹿児島県"
        },
        {
            id: 18,
            region: 4,
            prefecture: "沖縄県"
        },
        {
            id: 19,
            region: 5,
            prefecture: "青森県"
        },
        {
            id: 20,
            region: 5,
            prefecture: "岩手県"
        },
        {
            id: 21,
            region: 5,
            prefecture: "秋田県"
        },
        {
            id: 22,
            region: 5,
            prefecture: "山形県"
        },
        {
            id: 23,
            region: 5,
            prefecture: "福島県"
        },
        {
            id: 24,
            region: 5,
            prefecture: "宮城県"
        },
        {
            id: 25,
            region: 6,
            prefecture: "茨城県"
        },
        {
            id: 26,
            region: 6,
            prefecture: "栃木県"
        },
        {
            id: 27,
            region: 6,
            prefecture: "群馬県"
        },
        {
            id: 28,
            region: 6,
            prefecture: "群馬県"
        },
        {
            id: 29,
            region: 6,
            prefecture: "千葉県"
        },
        {
            id: 30,
            region: 6,
            prefecture: "東京都"
        },
        {
            id: 31,
            region: 6,
            prefecture: "神奈川県"
        },
        {
            id: 32,
            region: 7,
            prefecture: "新潟県"
        },
        {
            id: 33,
            region: 7,
            prefecture: "富山県"
        },
        {
            id: 34,
            region: 7,
            prefecture: "石川県"
        },
        {
            id: 35,
            region: 7,
            prefecture: "福井県"
        },
        {
            id: 36,
            region: 7,
            prefecture: "山梨県"
        },
        {
            id: 37,
            region: 7,
            prefecture: "長野県"
        },
        {
            id: 38,
            region: 7,
            prefecture: "岐阜県"
        },
        {
            id: 39,
            region: 7,
            prefecture: "静岡県"
        },
        {
            id: 40,
            region: 7,
            prefecture: "愛知県"
        },
        {
            id: 41,
            region: 8,
            prefecture: "三重県"
        },
        {
            id: 42,
            region: 8,
            prefecture: "滋賀県"
        },
        {
            id: 43,
            region: 8,
            prefecture: "京都府"
        },{
            id: 44,
            region: 8,
            prefecture: "大阪府"
        },
        {
            id: 45,
            region: 8,
            prefecture: "兵庫県"
        },
        {
            id: 46,
            region: 8,
            prefecture: "奈良県"
        },
        {
            id: 47,
            region: 8,
            prefecture: "和歌山県"
        }        
    ],
    estate: [
        {
            id: 1,
            title: "プロパティのタイトル",
            prefecture: 1,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額50000円",
            area: "1000sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 2,
            title: "プロパティのタイトル",
            prefecture: 1,
            point: "安全な近所。",
            street: "サンプルストリート",
            rent: "月額1 000 000円",
            area: "2000sqm",
            floor_room_number: "R707",
            transaction_id: "1"
        },
        {
            id: 3,
            title: "プロパティのタイトル",
            prefecture: 2,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額100 000円",
            area: "1200sqm",
            floor_room_number: "F3",
            transaction_id: "2"
        },
        {
            id: 4,
            title: "プロパティのタイトル",
            prefecture: 2,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "1 000 000円",
            area: "3000sqm",
            floor_room_number: "F2 / R111",
            transaction_id: "3"
        },
        {
            id: 5,
            title: "プロパティのタイトル",
            prefecture: 2,
            point: "パーキング",
            street: "サンプルストリート",
            rent: "月額50000円",
            area: "1000sqm",
            floor_room_number: "F1/R101",
            transaction_id: "2"
        },
        {
            id: 6,
            title: "プロパティのタイトル",
            prefecture: 3,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額50000円",
            area: "1000sqm",
            floor_room_number: "F1/R101",
            transaction_id: "2"
        },
        {
            id: 7,
            title: "プロパティのタイトル",
            prefecture: 3,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額50000円",
            area: "1000sqm",
            floor_room_number: "F1/R101",
            transaction_id: "3"
        },
        {
            id: 8,
            title: "プロパティのタイトル",
            prefecture: 3,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 9,
            title: "プロパティのタイトル",
            prefecture: 20,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 10,
            title: "プロパティのタイトル",
            prefecture: 20,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "1000sqm",
            floor_room_number: "R101",
            transaction_id: "3"
        },
        {
            id: 11,
            title: "プロパティのタイトル",
            prefecture: 21,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 12,
            title: "プロパティのタイトル",
            prefecture: 19,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 13,
            title: "プロパティのタイトル",
            prefecture: 26,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 14,
            title: "プロパティのタイトル",
            prefecture: 24,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 15,
            title: "プロパティのタイトル",
            prefecture: 27,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 16,
            title: "プロパティのタイトル",
            prefecture: 31,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 17,
            title: "プロパティのタイトル",
            prefecture: 3,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 18,
            title: "プロパティのタイトル",
            prefecture: 43,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "R101",
            transaction_id: "1"
        },{
            id: 19,
            title: "プロパティのタイトル",
            prefecture: 43,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1",
            transaction_id: "1"
        },
        {
            id: 20,
            title: "プロパティのタイトル",
            prefecture: 43,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1",
            transaction_id: "1"
        },
        {
            id: 21,
            title: "プロパティのタイトル",
            prefecture: 40,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 22,
            title: "プロパティのタイトル",
            prefecture: 7,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 23,
            title: "プロパティのタイトル",
            prefecture: 6,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 24,
            title: "プロパティのタイトル",
            prefecture: 12,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 25,
            title: "プロパティのタイトル",
            prefecture: 30,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "R101",
            transaction_id: "1"
        },
        {
            id: 26,
            title: "プロパティのタイトル",
            prefecture: 31,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 27,
            title: "プロパティのタイトル",
            prefecture: 32,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "3"
        },
        {
            id: 28,
            title: "プロパティのタイトル",
            prefecture: 15,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 29,
            title: "プロパティのタイトル",
            prefecture: 30,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "2"
        },{
            id: 30,
            title: "プロパティのタイトル",
            prefecture: 19,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 31,
            title: "プロパティのタイトル",
            prefecture: 13,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 32,
            title: "プロパティのタイトル",
            prefecture: 12,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 33,
            title: "プロパティのタイトル",
            prefecture: 36,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "R101",
            transaction_id: "3"
        },
        {
            id: 34,
            title: "プロパティのタイトル",
            prefecture: 39,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "2"
        },
        {
            id: 35,
            title: "プロパティのタイトル",
            prefecture: 34,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 36,
            title: "プロパティのタイトル",
            prefecture: 37,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 37,
            title: "プロパティのタイトル",
            prefecture: 31,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "R101",
            transaction_id: "2"
        },
        {
            id: 38,
            title: "プロパティのタイトル",
            prefecture: 47,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1/R101",
            transaction_id: "1"
        },
        {
            id: 39,
            title: "プロパティのタイトル",
            prefecture: 13,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "R201",
            transaction_id: "2"
        },
        {
            id: 40,
            title: "プロパティのタイトル",
            prefecture: 1,
            point: "安いです。",
            street: "サンプルストリート",
            rent: "月額1000円",
            area: "100sqm",
            floor_room_number: "F1",
            transaction_id: "3"
        }


    ]
})

export const getters = {
    getPrefectureByRegion: (state) => (id) => {
        return state.prefecture.filter(prefecture => prefecture.region == id)
    },
    
    getRealEstate: (state) => (p, t) => {
        let estates = state.estate.filter(estate => estate.prefecture == p);
        if (t == 0){
            return estates;
        } else {
            return estates.filter(e => e.transaction_id == t);
        }
    }
}