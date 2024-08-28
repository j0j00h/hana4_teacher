globalThis.name = 'GlobalName';
this.name = 'ModuleName';

//
function tf() {
  console.log('11=', self.name);
  console.log('12=', this); // Timeout
}

const obj = {
  name: 'ObjName',
  bark1: function () {
    console.log('1=', this.name);
    const self = this; // OLD version
    setTimeout(tf.bind(this), 1000); // .bind(this)
    console.log('xxxx');
  },
  bark2() {
    // same as bark2: function() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
  bark3() {
    // ⇐⇒ bark3: function() {
    function innerFn() {
      console.log(this); // ?
    }
    innerFn();
  },
  bark4: () => {
    console.log(this.name); // ?
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

// obj.bark1(); // bark1.bind(obj)()
// obj.bark2();
// obj.bark3();
// obj.bark4();

const fff = obj.bark1;
fff();
