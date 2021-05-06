## 虚拟 DOM

### 为什么要用 VDOM

VDOM 其实比精心设计的手动更新慢，没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。

好处在于：

-   在牺牲部分性能的前提下，掩盖底层的 DOM 操作，增加了可维护性
-   解决由命令式编程转变为声明式编程、数据驱动后所带来的性能问题
-   打开了函数式 UI 编程的大门
-   VDOM 把渲染过程抽象化了，从而使得组件的抽象能力也得到提升，并且可以适配 DOM 以外的渲染目标

参考：

-   [https://segmentfault.com/a/1190000013365426](https://segmentfault.com/a/1190000013365426)
-   [https://www.zhihu.com/question/31809713](https://www.zhihu.com/question/31809713)
-   [别再说虚拟 DOM 快了，要被打脸的](https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484104&idx=1&sn=59f4d94f95664b2dbb9b23a6cd0bce45&chksm=ea0161a4dd76e8b2f598a39e5522e5c9ee0757f597a05e79d56e7fb89e71792728c1471e1284&scene=21#wechat_redirect)
-   [深入理解虚拟 DOM，它真的不快](https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484138&idx=1&sn=3c5d9af3c5ab684b697378503bc617af&chksm=ea016186dd76e890be7cfd94c3bb967d4ad6ae4ca0d1b842aef391c43c816d2d7b43c47fd207&scene=21#wechat_redirect)

## React 和 Vue 区别

React diff dom，Vue 劫持 数据（自动获得 diff），也 diff dom

React 中数据发生变化（调用 setstate 时），render 函数就会执行，重新生成一个新的 VDOM，这个 VDOM 和旧的 VDOM 做比较，得出差异然后渲染。
而 Vue 组件中数据发生变化，由于数据变化会触发 setter，由于 Vue 组件中数据的 getter 的作用，收集了依赖，setter 触发会根据这些依赖，生成新的 VDOM，然后对比新旧 VDOM 进行渲染。

React 和 Vue 的 VDOM 都是一样的， 都是用 JS 对象来模拟真实 DOM，然后用 VDOM 的 diff 来最小化更新真实 DOM。
除了极个别实现外，两者前半部分（用 JS 对象来模拟真实 DOM）几乎是一样的。
而对于后半部分（用 VDOM 的 diff 来最小化更新真实 DOM）两者算法也是类似的，包括 replace delete insert 等

虽然两者对于 dom 的更新策略不太一样，React 采用自顶向下的全量 diff，Vue 是局部订阅的模式，但是这其实和 VDOM 并无关系
