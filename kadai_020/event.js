//btnというidを持つHTML要素を取得し、定数に代入
const btn =document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入
const text =document.getElementById('text');

//クリックされたときにイベント処理を実行
btn.addEventListener('click',() => {

//テキストを追加
text.textContent = 'ボタンをクリックしました'  
});