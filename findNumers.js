
class A {
  constructor() {
    this.name = 'nameA';
  }

  valitateA() {
    console.log('valitateA');
  }

}

class B extends A {
  constructor() {
    super();
    this.name = 'nameB';
  }

  valitateB() {
    console.log('valitateB');
  }

}

class C extends B {
  constructor() {
    super();
    this.name = 'nameC';
  }

  valitateC() {
    console.log('valitateC');
  }

}

function findMembers (obj, attrFix, MethodFix) {

  const keys = Object.getOwnPropertyNames(obj);
  console.log(obj.__proto__.constructor);


}

const c = new C();
const a = new A();

const members = findMembers(c, 'name', 'valitate')

console.log(members);