/* 初期設定（購入商品の金額と割引券各所持枚数） */
let first_price = 6978;
let tickets_1000off = 10;
let tickets_500off = 8;
let tickets_100off = 6;

/* 割引券利用可能枚数算出の関数 */
function discount_price(first_price [tickets_1000off, tickets_500off, tickets_100off]){
    /* 割引券利用可能金額を満たしているかどうかのチェック */
    if(first_price >= 5000){
       /* 1000円割引券の利用可能枚数チェック */
        if(tickets_1000off > 0){
            for(i = 0; i < tickets_1000off ; i++ ){
                if(first_price - 1000 * i < 1000){
                    break;
                }
            }
        }
        let second_price = first_price - 1000 * i;
        /* 500円割引券の利用可能枚数チェック */
        if(tickets_500off > 0 && second_price >= 500){
            for(j = 0; j < tickets_500off ; j++){
                if(second_price - 500 * j < 500){
                    break;
                }
            }
        }
        let third_price = second_price - 500 * j;
        /* 100円割引券の利用枚数チェック */
        if(tickets_100off > 0 && third_price >= 100){
            for(k = 0; k < tickets_100off ; k++){
                if(third_price - 100 * k < 100){
                    break;
                }
            }
        }
        /* 割引券利用後の金額の算出 */
        let fainal_price = third_price - 100 * k;
        /* 最終回答 */
        let final_output = ｀支払金額は${fainal_price}円となります。${first_price}円の商品なので1000円割引券が${i}枚、500円割引券が${j}枚、100円割引券が${k}枚利用しました。｀;
       return final_output
   } else {
       return ｀${first_price}円の商品は購入商品5000円未満のため割引券の利用はできません。｀;
   }
}

console.log(discount_price(first_price, [tickets_1000off,tickets_500off,tickets_100off]));
