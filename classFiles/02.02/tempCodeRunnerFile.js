let Obj = {key1: 'woot', key2: 12345, key3: false, key4: [6, 7, 8, 9], key5: {innerkey: 'hello'}};

let keys = Object.keys(obj);  //
for (let val of keys){
    console.log(val);
}