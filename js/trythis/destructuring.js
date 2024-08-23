function play() {
  // swap
  let a = 1;
  let b = 2;
  let t = a;
  a = b;
  b = t;
  console.log('🚀 old - a b:', a, b);
  a = 1;
  b = 2;
  [b, a] = [a, b];
  console.log('🚀 new - a b:', a, b);

  console.log('------------------');
  let arr = [1, 2];
  [arr[0], arr[1]] = [arr[1], arr[0]];
  console.log('🚀  arr:', arr);

  console.log('------------------');

  // let rr = qq * 10;
  // let qq = 1;

  // let r;
  // r = q * 10;
  // let q;
  // q = 1;
  let q, r, s;
  ({ r = q * 10, q, s } = { q: 10, s: 20 });
  // {
  //   q = 9;
  //   r = 1;
  // }
}

const user = { id: 1, name: 'Hong', passwd: 'xyz', addr: 'Seoul' };

function ex1() {
  /*
  1.    function f1(user) { console.log(user.id, user.name); }
  2.    function f2({id, name}) { console.log(id, name); }
  3.    const f3 = ({id, name}) => { console.log(id, name); }
  
  */
}

function ex2() {
  // 정답1
  // const { passwd, ...userInfo } = user;

  // 정답2
  const userInfo = { ...user };
  delete userInfo.passwd;

  console.log(userInfo);
}

function ex3() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  // cf. const id1 = arr[0][0].id;  // Bad
  console.log(id1, id2, id3);
  // 출력결과: 1 2 3
}
// ex3();

function symbolProperty() {
  const obj = { [Symbol()]: 123 };
  console.log(obj, Reflect.ownKeys(obj));
  const [kk] = Reflect.ownKeys(obj);
  console.log('🚀  kk:', obj[kk]);
}

function ex4() {
  function getValueExceptInitial(k) {
    const { [k]: val } = user;
    if (typeof val !== 'string') return;

    // const [, ...ret] = [...val];
    const [, ...ret] = val;
    return ret.join('');
  }

  console.log(getValueExceptInitial('name')); // 'ong'
  console.log(getValueExceptInitial('passwd')); // 'yz'
  console.log(getValueExceptInitial('addr')); // 'eoul'
  console.log(getValueExceptInitial('id')); // 'eoul'
}

ex5();

function ex5() {
  user.f = function () {
    console.log('ffff', this.name);
  };

  console.log('🚀  user:', user);

  user.f();

  const { f: xf } = user;
  xf();

  function getDiffMillis(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(dt2);
    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;
    return getTime1.bind(d1)() - getTime2.bind(d2)();
  }
  console.log(getDiffMillis('2021-01-01', '2021-01-02'));
}
