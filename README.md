# 買い物プログラムの作成
あなたは今買い物に来ています<br>
これから購入する商品の合計金額に応じて、手持ちの割引券を何枚使えるのかを教えてくれる<br>
プログラムを JavaScript で実装してください<br>

割引券の種類<br>
- 3種類ある：1,000円割引券, 500円割引券, 100円割引券<br>

所与の条件<br>
- 購入する商品の合計金額が5,000円以上の場合のみ利用可能<br>
- 支払金額 = 購入する商品の合計金額 - 利用する割引券の合計金額<br>
- できるだけ支払金額が少なくなるようにしてください<br>
- 利用する割引券の合計金額は、購入する商品の合計金額を越えないようにしてください<br>

ヒント<br>
購入する商品の合計金額と手持ちの割引券の枚数を引数として渡すメソッドを実装しましょう<br>
- 例：購入する商品の合計金額が20,000円で、1,000円割引券1枚、500円割引券2枚、100円割引券5枚を持っている場合の式<br>

メソッド名(20000, [ 1, 2, 5])
