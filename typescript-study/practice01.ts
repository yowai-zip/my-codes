// 変数の宣言と代入
const str = "Hello World!";
console.log(str);
// message = "hogehoge"; // エラーになる
let num = 35;
console.log(num);

// 変数の型を返す
console.log(typeof str);    // string
console.log(typeof num);    // number

// 型推論
// 何もつけなければ自動的に肩を推論してくれる
// 型アノテーションを使うことで明示的な型を定義できる
const str2 = 'Hello';
const str3: string = 'Hello';

// nullもある
const notExist = null;
console.log(notExist);
console.log(typeof notExist); // object

// 何にでもなりうる型 any unknown
// any:どんな型でも許容する
let hoge: any;
hoge = 1000;
console.log(typeof hoge);
const hogei: number = hoge;
const hoges: string = hoge;
const hogeu: unknown = hoge;
console.log('number '+ typeof hogei);   // number
console.log('string '+ typeof hoges);   // number
console.log('unknown ' + typeof hogeu); // number
// any型が相手だと許容してしまうので危険

// ========== UNION ==========

// 二つ以上のいずれかの型を取りうることを表せる
let singouki: 'red'|'yellow'|'green';   // 三色以外の代入を受け付けない

// =    代入
// ==   等価(型が異なっても値が等しければOK)
// ===  厳密等価(値も型も一致してないとダメ)

