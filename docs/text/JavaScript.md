# JavaScript

## 深拷贝

```js
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}
```

### 循环引用、相同引用

可以使用一个 WeakMap 结构存储已经被拷贝的对象，每一次进行拷贝的时候就先向 WeakMap 查询该对象是否已经被拷贝，如果已经被拷贝则取出该对象并返回

```js
function isObj(obj) {
    return typeof obj === 'object' && obj !== null;
}

function deepClone(obj, map = new WeakMap()) {
    if (map.has(obj)) {
        return map.get(obj);
    }

    let objClone = Array.isArray(obj) ? [] : {};
    map.set(obj, objClone);
    for (let key in obj) {
        objClone[key] = isObj(obj[key]) ? deepClone(obj[key], map) : obj[key];
    }
    return objClone;
}
```

**相同引用：**

```js
let obj = { asd: 'asd' };
let obj2 = { name: 'aaaaa' };
obj.ttt1 = obj2;
obj.ttt2 = obj2;
let cp = JSON.parse(JSON.stringify(obj));
obj.ttt1.name = 'change';
cp.ttt1.name = 'change';
console.log(obj, cp);
```

obj 中的 ttt1 和 ttt2 指向了同一个对象 obj2，改变 ttt1 时，ttt2 也会改变，那么拷贝之后，cp 的 ttt1 和 ttt2 应该也有相同的引用

### 特殊对象

例如 Date、Reg

```js
function isObj(obj) {
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
}

function deepClone(obj, map = new WeakMap()) {
    let objClone;
    let Constructor = obj.constructor;
    switch (Constructor) {
        case RegExp:
            const reFlags = /\w*$/;
            objClone = new obj.constructor(obj.source, reFlags.exec(obj));
            objClone.lastIndex = obj.lastIndex;
        case Date:
            objClone = new Constructor(obj);
            break;
        default:
            if (map.has(obj)) return map.get(obj);
            objClone = new Constructor();
            map.set(obj, objClone);
    }
    for (let key in obj) {
        objClone[key] = isObj(obj[key]) ? deepClone(obj[key], map) : obj[key];
    }
    return objClone;
}
```

### 函数

可以使用 `eval(fun.toString())` 对箭头函数进行拷贝，普通函数会出错

对于普通函数，可以使用正则取出函数体和函数参数，然后使用 `new Function ([arg1[, arg2[, ...argN]],] functionBody)` 构造函数重新构造一个新的函数

```js
function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        console.log('普通函数');
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            console.log('匹配到函数体：', body[0]);
            if (param) {
                const paramArr = param[0].split(',');
                console.log('匹配到参数：', paramArr);
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}
```

参考：

-   [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1#heading-0)
-   [JavaScript 深拷贝的一些坑](https://juejin.im/post/5b235b726fb9a00e8a3e4e88)
-   [https://juejin.im/post/5b20c9f65188257d7d719c1c](https://juejin.im/post/5b20c9f65188257d7d719c1c)

## 扩展、密封、冻结

| &nbsp;                     | 添加新属性 | 删除已有属性 | 修改已有属性 | 已有属性的可枚举性、可配置性、可写性 |
| -------------------------- | ---------- | ------------ | ------------ | ------------------------------------ |
| Object.preventExtensions() | 否         | 否           | 否           | 是                                   |
| Object.seal()              | 否         | 否           | 是           | 否                                   |
| Object.freeze()            | 否         | 否           | 否           | 否                                   |

| &nbsp;                   | Object.preventExtensions(obj) | Object.seal(obj) | Object.freeze(obj) |
| ------------------------ | ----------------------------- | ---------------- | ------------------ |
| Object.isExtensible(obj) | false(不可添加新属性)         | false            | false              |
| Object.isSealed(obj)     | false(非密封)                 | true             | true               |
| Object.isFrozen(obj)     | false(非冻结)                 | false            | true               |

## 继承

### 1.原型链继承

```js
function Parent() {
    this.name = 'aaa';
}
Parent.prototype.getName = function() {
    console.log(this.name);
};

function Child() {}
Child.prototype = new Parent();

let child1 = new Child();
console.log(child1.getName());
```

存在问题：

1. 引用类型的属性被所有实例共享

```js
function Parent() {
    this.name = [1, 2];
}

function Child() {}
Child.prototype = new Parent();

let child1 = new Child();
child1.name.push(3);

let child2 = new Child();
console.log(child2.name); // [1, 2, 3]
```

2. 在创建 子类（Child） 的 实例 时，不能向 父类（Parent） 传参

### 2.借用构造函数（经典继承）

```js
function Parent() {
    this.name = [1, 2];
}

function Child() {
    Parent.call(this);
}

let child1 = new Child();
child1.name.push(3);

let child2 = new Child();
console.log(child2.name); // [1, 2]
```

优点：

1. 避免了引用类型的属性被所有实例共享
2. 可以在创建 子类实例 时向父类传参

```js
function Parent(name) {
    this.name = name;
}

function Child(name) {
    Parent.call(this, name);
}

let child1 = new Child('aaa');
console.log(child1.name);
let child2 = new Child('bbb');
console.log(child2.name);
```

缺点：

方法都在构造函数中定义，每次创建实例都会创建一遍方法

### 3.组合继承

原型链继承和经典继承的组合，使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承

```js
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function() {
    console.log(this.name);
};

function Child(name, age) {
    Parent.call(this, name);

    this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.getAge = function() {
    console.log(this.age);
};

let child1 = new Child('aaa', 18);
child1.colors.push('black');

console.log(child1.name); // aaa
console.log(child1.age); // 18
console.log(child1.getAge()); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('bbb', '20');

console.log(child2.name); // bbb
console.log(child2.age); // 20
console.log(child2.getAge()); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

避免了原型链继承和构造函数的缺点，融合了它们的优点

缺点：

会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部

在第一次调用 Parent 构造函数时，Child.prototype 会得到两个属性：name 和 colors；它们都是 Parent 的实例属性，只不过 现在位于 Child 的原型中。当调用 Child 构造函数时，又会调用一次 Parent 构造函数，这一次又在新对象上创建了实例属性 name 和 colors。于是，这两个属性就屏蔽了原型中的两个同名属性。

最终会有两组 name 和 colors 属性：一组在实例上，一组在 Child 原型中

```js
function Child(name, age) {
    Parent.call(this, name); // 第二次调用，let child1 = new Child('aaa', 18); 创建实例时，会调用构造函数

    this.age = age;
}
Child.prototype = new Parent(); // 第一次调用
```

### 4.原型式继承

```js
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
```

就是 Object.create() 的模拟实现

缺点：

包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样

```js
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
};

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.firends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]
```

注意：修改 person1.name 的值，person2.name 的值并未发生改变，并不是因为 person1 和 person2 有独立的 name 值，而是因为 `person1.name = 'person1'`给 person1 添加了 name 值，并非修改了原型上的 name 值

### 5.寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象

```js
function createObj(o) {
    var clone = Object.create(o);
    clone.sayName = function() {
        console.log('hi');
    };
    return clone;
}
```

代码中的 Object.create 不是必须的，任何能够返回新对象的函数都适用于此模式

缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法

### 6.寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法

基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已

```js
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = createObj(parent.prototype); // 创建对象
    prototype.constructor = child; // 增强对象
    child.prototype = prototype; // 指定对象
}

// 当我们使用的时候：
prototype(Child, Parent);
```

这个函数接收两个参数：子类型构造函数和父类型构造函数。在函数内部，第一步是创建超类型原型的一个副本。第二步是为创建的副本添加 constructor 属性，从而弥补因重写原型而失去的默认的 constructor 属性。 最后一步，将新创建的对象（即副本）赋值给子类型的原型

优点：

1. 只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性

2. 与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf

参考：

-   [JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
-   JavaScript 高级程序设计

## new

1. 创建一个对象
2. 获得构造函数
3. 链接到原型
4. 绑定 this
5. 返回新对象

```js
function objectFactory() {
    let obj = new Object();

    let Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    let result = Constructor.apply(obj, arguments);

    return typeof result === 'object' ? result || obj : obj;
}
```

参考：

-   [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)
