const wm = new WeakMap();
const m = new Map();
let obj1 = { id: 1 };
let x = { id: 10 };
{
  const obj2 = { id: 2 };

  wm.set(obj1, 1);
  m.set(obj1, 1);
  wm.set(obj2, x);
  m.set(obj2, x);
  console.log(wm, wm.has(obj1));
  console.log(m, m.has(obj1));

  obj1 = null; // obj1 주소 변경!
  obj2.id = 3;
  x = { id: 100 };
  // x.id = 100;
  console.log('-----------');
  console.log(wm, wm.has(obj1), wm.has(obj2));
  console.log(m, m.has(obj1), m.has(obj2));
  console.log('>>>', obj1);
} // wm만 전역이라면 obj1, obj2는 GC!!
console.log('-----------');
console.log(m.size, wm.size); // 2, undefined
console.log(wm, wm.has(obj1));
console.log(m, m.has(obj1));
console.log('m.keys>>', [...m.keys()]);
console.log('m.values>>', [...m.values()], obj1, x);

const oldObj1 = [...m.keys()][0];
console.log('>>>', oldObj1);
m.delete(oldObj1);
console.log('🚀  m:', m);
console.log('>>>', oldObj1);
console.log('==================');
// WeakSet vs Set
const ws = new WeakSet();
const s = new Set();
{
  let obj1 = { id: 1 };
  const obj2 = { id: 2 };
  ws.add(obj1);
  ws.add(obj2);

  s.add(obj1);
  obj1 = null; // obj1 주소 변경
  console.log(ws, ws.has(obj1));

  s.add(obj2);
  console.log(s, s.has(obj1));
} // ws만 전역이라면 obj1, obj2는 GC!!

console.log(s.size, ws.size);
