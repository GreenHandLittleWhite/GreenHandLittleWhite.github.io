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
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
}

function deepClone(obj, hash = new WeakMap()) {
    if (hash.has(obj)) {
        return hash.get(obj);
    }

    let objClone = Array.isArray(obj) ? [] : {};
    hash.set(obj, objClone);
    for (let key in obj) {
        objClone[key] = isObj(obj[key]) ? deepClone(obj[key], hash) : obj[key];
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

## 特殊对象

例如 Date、Reg

```js
function isObj(obj) {
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
}

function deepClone(obj, hash = new WeakMap()) {
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
            if (hash.has(obj)) return hash.get(obj);
            objClone = new Constructor();
            hash.set(obj, objClone);
    }
    for (let key in obj) {
        objClone[key] = isObj(obj[key]) ? deepClone(obj[key], hash) : obj[key];
    }
    return objClone;
}
```

## 函数

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
