componentReceiveProps并不是由props的变化触发的，而是由父组件的更新触发的。



getDerivedStateFromProps是作为一个试图代替componentWillReceiveProps的API出现的



getDerivedStateFromProps不能完全和componentWillReceiveProps画等号



why hooks？
1、告别难以理解的class
2、解决业务逻辑难以拆分的问题
3、使得状态逻辑复用变得可行
4、函数组件从设计思想来看更加符合react的理念



hooks使用规则：

只在react函数中调用hook

不要在循环、条件或嵌套函数中调用hook（要确保hooks在每次渲染时都保持同样的执行顺序）



以useState为例，分析React-Hooks的调用链路

mountState(首次渲染)构建链表并渲染，updateState依次遍历链表并渲染

hooks的道染是通过“依次遍历”来定血每个hooks 内容的。如果前后两次读到的链表在顺序上出现差异，那么渲染的结果自然是不可控的。

hooks的本质是链表



JavaScript线程与渲染线程必须是互斥的：

当其中一个线程执行时，另一个线程只能挂起等待



completeWork是自底向上执行的（子节点的completeWork总是比父节点先执行）

![优先级调度是如何实现的](C:\Users\FM\Desktop\fm-blog\docs\imgs\优先级调度是如何实现的.jpg)



![createStore1](C:\Users\FM\Desktop\fm-blog\docs\imgs\createStore1.jpg)

![createStore2.jpg](C:\Users\FM\Desktop\fm-blog\docs\imgs\createStore2.jpg.jpg)