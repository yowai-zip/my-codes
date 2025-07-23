// 配列の要素としてもてる値の型を定義できる
// T[] or Array<T> の書き方で定義できる
const arr: string[] = ["AAA", "BBB"];
console.log(arr);       // [ 'AAA', 'BBB' ]
console.log(arr[1]);    // BBB
console.log(typeof arr);// object

arr.push("CCC");
console.log(arr);       // [ 'AAA', 'BBB', 'CCC' ]

// UNION型との組み合わせもできちゃう
const YorN: ('yes' | 'no')[] = ['yes', 'no', 'yes'];
YorN.push('no');
console.log(YorN);

// タプル - 要素数/順番/型を定義された配列
let tapr: [number, string, boolean];
tapr = [50, 'hogehoge', true];
console.log(tapr);
// ラベル
const label: [id: number, name: string] = [1, "email"]
// 可変長('...')も使える
let resutoparameta: [boolean, ...string[]];
resutoparameta = [true, 'a', 'ab', 'abc'];
resutoparameta = [true, 'bcbc'];

// オブジェクト型の定義