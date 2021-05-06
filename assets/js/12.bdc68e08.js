(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{374:function(_,t,v){"use strict";v.r(t);var e=v(45),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"常见状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[_._v("#")]),_._v(" 常见状态码")]),_._v(" "),v("p",[_._v("1XX 通知、信息提示")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("100 Continue\n\n101 Switching Protocols\n")])])]),v("p",[_._v("2XX 成功")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("200 OK，表示从客户端发来的请求在服务器端被正确处理\n\n204 No content，表示请求成功，但响应报文不含实体的主体部分\n\n205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容\n\n206 Partial Content，进行范围请求\n")])])]),v("p",[_._v("3XX 重定向")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL\n\n302 found，临时性重定向，表示资源临时被分配了新的 URL\n\n303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源\n\n304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况\n\n307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求\n")])])]),v("p",[_._v("4XX 客户端错误")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("400 bad request，请求报文存在语法错误\n\n401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息\n\n403 forbidden，表示对请求资源的访问被服务器拒绝\n\n404 not found，表示在服务器上没有找到请求的资源\n")])])]),v("p",[_._v("5XX 服务器错误")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("500 internal sever error，表示服务器端在执行请求时发生了错误\n\n501 Not Implemented，表示服务器不支持当前请求所需要的某个功能\n\n503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求\n")])])]),v("h2",{attrs:{id:"tcp-三次握手和四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手和四次挥手"}},[_._v("#")]),_._v(" TCP 三次握手和四次挥手")]),_._v(" "),v("h3",{attrs:{id:"三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),v("p",[_._v("所谓三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送 3 个包")]),_._v(" "),v("ol",[v("li",[_._v("第一次握手(SYN=1, seq=x)————客户端：服务器你在吗")])]),_._v(" "),v("p",[_._v("客户端发送一个 TCP 的 SYN 标志位置 1 的包，指明客户端打算连接的服务器的端口，以及初始序号 X,保存在包头的序列号(Sequence Number)字段里")]),_._v(" "),v("p",[_._v("发送完毕后，客户端进入 SYN_SEND 状态")]),_._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[_._v("第二次握手(SYN=1, ACK=1, seq=y, ACKnum=x+1)————服务端：我在，你要连接我吗")])]),_._v(" "),v("p",[_._v("服务器发回确认包(ACK)应答，即 SYN 标志位和 ACK 标志位均为 1，服务器端选择自己 ISN 序列号，放到 Seq 域里，\n同时将确认序号(Acknowledgement Number)设置为客户的 ISN 加 1，即 X+1，发送完毕后，服务器端进入 SYN_RCVD 状态")]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[_._v("第三次握手(ACK=1，ACKnum=y+1)————客户端：是的，我要链接")])]),_._v(" "),v("p",[_._v("客户端再次发送确认包(ACK)，SYN 标志位为 0，ACK 标志位为 1，并且把服务器发来 ACK 的序号字段+1，放在确定字段中发送给对方，并且在数据段放写 ISN 的+1")]),_._v(" "),v("p",[_._v("发送完毕后，客户端进入 ESTABLISHED 状态，当服务器端接收到这个包时，也进入 ESTABLISHED 状态，TCP 握手结束")]),_._v(" "),v("h4",{attrs:{id:"三次握手的目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手的目的"}},[_._v("#")]),_._v(" 三次握手的目的")]),_._v(" "),v("p",[_._v("三次握手的目的是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息，")]),_._v(" "),v("p",[_._v("防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误（防止了服务器端的一直等待而浪费资源）")]),_._v(" "),v("p",[_._v("例子：")]),_._v(" "),v("p",[_._v("已失效的连接请求报文段”的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。")]),_._v(" "),v("h3",{attrs:{id:"四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")]),_._v(" 四次挥手")]),_._v(" "),v("p",[_._v("TCP 的连接的拆除需要发送四个包，因此称为四次挥手(Four-way handshake)，也叫做改进的三次握手，客户端或服务器均可主动发起挥手动作")]),_._v(" "),v("ol",[v("li",[_._v("第一次挥手(FIN=1，seq=x)————主动方：我已经关闭了向你那边的主动通道了，只能被动接收了")])]),_._v(" "),v("p",[_._v("假设客户端想要关闭连接，客户端发送一个 FIN 标志位置为 1 的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据")]),_._v(" "),v("p",[_._v("发送完毕后，客户端进入 FIN_WAIT_1 状态")]),_._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[_._v("第二次挥手(ACK=1，ACKnum=x+1)————被动方：收到通道关闭的信息")])]),_._v(" "),v("p",[_._v("服务器端确认客户端的 FIN 包，发送一个确认包（ACK），表明自己接受到了客户端关闭连接的请求，但还没有准备好关闭连接")]),_._v(" "),v("p",[_._v("发送完毕后，服务器端进入 CLOSE_WAIT 状态，客户端接收到这个确认包之后，进入 FIN_WAIT_2 状态，等待服务器端关闭连接")]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[_._v("第三次挥手(FIN=1，seq=y)————被动方：那我也告诉你，我这边向你的主动通道也关闭了")])]),_._v(" "),v("p",[_._v("服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN 置为 1")]),_._v(" "),v("p",[_._v("发送完毕后，服务器端进入 LAST_ACK 状态，等待来自客户端的最后一个 ACK")]),_._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[_._v("第四次挥手(ACK=1，ACKnum=y+1)————主动方：最后收到数据，之后双方无法通信")])]),_._v(" "),v("p",[_._v("客户端接收到来自服务器端的关闭请求，发送一个确认包（ACK），并进入 TIME_WAIT 状态，等待可能出现的要求重传的 ACK 包")]),_._v(" "),v("p",[_._v("服务器端接收到这个确认包之后，关闭连接，进入 CLOSED 状态")]),_._v(" "),v("p",[_._v("客户端等待了某个固定时间（两个最大段生命周期，2MSL，2 Maximum Segment Lifetime）之后，没有收到服务器端的 ACK ，认为服务器端已经正常关闭连接，于是自己也关闭连接，进入 CLOSED 状态")]),_._v(" "),v("h4",{attrs:{id:"四次挥手目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手目的"}},[_._v("#")]),_._v(" 四次挥手目的")]),_._v(" "),v("p",[_._v("为什么要四次分手")]),_._v(" "),v("p",[_._v("那四次分手又是为何呢？TCP 协议是一种面向连接的、可靠的、基于字节流的运输层通信协议。TCP 是全双工模式，这就意味着，当主机 1 发出 FIN 报文段时，只是表示主机 1 已经没有数据要发送了，主机 1 告诉主机 2，它的数据已经全部发送完毕了；但是，这个时候主机 1 还是可以接受来自主机 2 的数据；当主机 2 返回 ACK 报文段时，表示它已经知道主机 1 没有数据发送了，但是主机 2 还是可以发送数据到主机 1 的；当主机 2 也发送了 FIN 报文段时，这个时候就表示主机 2 也没有数据要发送了，就会告诉主机 1，我也没有数据要发送了，之后彼此就会愉快的中断这次 TCP 连接。如果要正确的理解四次分手的原理，就需要了解四次分手过程中的状态变化。")]),_._v(" "),v("ul",[v("li",[_._v("FIN_WAIT_1: 这个状态要好好解释一下，其实 FIN_WAIT_1 和 FIN_WAIT_2 状态的真正含义都是表示等待对方的 FIN 报文。而这两种状态的区别是：FIN_WAIT_1 状态实际上是当 SOCKET 在 ESTABLISHED 状态时，它想主动关闭连接，向对方发送了 FIN 报文，此时该 SOCKET 即进入到 FIN_WAIT_1 状态。而当对方回应 ACK 报文后，则进入到 FIN_WAIT_2 状态，当然在实际的正常情况下，无论对方何种情况下，都应该马上回应 ACK 报文，所以 FIN_WAIT_1 状态一般是比较难见到的，而 FIN_WAIT_2 状态还有时常常可以用 netstat 看到。（主动方）")]),_._v(" "),v("li",[_._v("FIN_WAIT_2：上面已经详细解释了这种状态，实际上 FIN_WAIT_2 状态下的 SOCKET，表示半连接，也即有一方要求 close 连接，但另外还告诉对方，我暂时还有点数据需要传送给你(ACK 信息)，稍后再关闭连接。（主动方）")]),_._v(" "),v("li",[_._v("CLOSE_WAIT：这种状态的含义其实是表示在等待关闭。怎么理解呢？当对方 close 一个 SOCKET 后发送 FIN 报文给自己，你系统毫无疑问地会回应一个 ACK 报文给对方，此时则进入到 CLOSE_WAIT 状态。接下来呢，实际上你真正需要考虑的事情是查看你是否还有数据发送给对方，如果没有的话，那么你也就可以 close 这个 SOCKET，发送 FIN 报文给对方，也即关闭连接。所以你在 CLOSE_WAIT 状态下，需要完成的事情是等待你去关闭连接。（被动方）")]),_._v(" "),v("li",[_._v("LAST_ACK: 这个状态还是比较容易好理解的，它是被动关闭一方在发送 FIN 报文后，最后等待对方的 ACK 报文。当收到 ACK 报文后，也即可以进入到 CLOSED 可用状态了。（被动方）")]),_._v(" "),v("li",[_._v("TIME_WAIT: 表示收到了对方的 FIN 报文，并发送出了 ACK 报文，就等 2MSL 后即可回到 CLOSED 可用状态了。如果 FINWAIT1 状态下，收到了对方同时带 FIN 标志和 ACK 标志的报文时，可以直接进入到 TIME_WAIT 状态，而无须经过 FIN_WAIT_2 状态。（主动方）")]),_._v(" "),v("li",[_._v("CLOSED: 表示连接中断。")])]),_._v(" "),v("p",[_._v("参考：")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://hit-alibaba.github.io/interview/basic/network/TCP.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://hit-alibaba.github.io/interview/basic/network/TCP.html"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/jawil/blog/issues/14",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://github.com/jawil/blog/issues/14"),v("OutboundLink")],1)])]),_._v(" "),v("h2",{attrs:{id:"简单请求和复杂请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和复杂请求"}},[_._v("#")]),_._v(" 简单请求和复杂请求")]),_._v(" "),v("h2",{attrs:{id:"get-与-post-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-与-post-区别"}},[_._v("#")]),_._v(" GET 与 POST 区别")]),_._v(" "),v("h2",{attrs:{id:"http-版本区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-版本区别"}},[_._v("#")]),_._v(" HTTP 版本区别")]),_._v(" "),v("p",[_._v("HTTP/1.0: TCP 连接不可复用，每次都要进行 TCP 连接、HTTP 通信、断开 TCP 连接\nHTTP/1.1: 实现 TCP 长连接，不需要重复连接，变成：TCP 连接、HTTP 通信 1、HTTP 通信 2 、断开 TCP 连接")]),_._v(" "),v("p",[_._v("HTTP/1.0: 队头阻塞问题。请求和请求间是串行的，如果发送了 A 请求，那么 A 请求的响应返回之前，B 请求无论如何都出不去\nHTTP/1.1: 管线化，允许多个 HTTP 请求批量地提交给服务器。不过发送动作是并行，服务器响应仍是串行的")]),_._v(" "),v("p",[_._v("HTTP/2.0:")]),_._v(" "),v("p",[v("strong",[_._v("二进制分帧")])]),_._v(" "),v("p",[_._v("在 HTTP1.x 中，数据以文本的格式进行传输，解析起来比较低效")]),_._v(" "),v("p",[_._v("HTTP2.0 在传输消息时，首先会将消息划分为更小的消息和帧，然后再对其采取二进制格式的编码，确保高效的解析")]),_._v(" "),v("p",[v("strong",[_._v("头部压缩")])]),_._v(" "),v("p",[_._v("客户端和服务器分别会维护一份相同的静态字典，这个字典用来存储常见的头部名称，以及常见的头部名称和值的组合。同时还会维护一份相同的动态字典，这个字典可以实时被更新")]),_._v(" "),v("p",[_._v("如此一来，第一次相互通信过后，后面的请求只需要发送与前面请求之间头部不同的地方，其它的头部信息都可以从字典中获取。相对于 HTTP/1.x 中每次都要携带整个头部的操作来说，节省了网络开销")]),_._v(" "),v("p",[v("strong",[_._v("服务端推送")])]),_._v(" "),v("p",[_._v("HTTP/1.x 中，如果用户请求了资源 A，结果发现如果要用资源 A，那么必须依赖资源 B，这时需要再请求一次")]),_._v(" "),v("p",[_._v("HTTP/2.0 中，允许服务器主动向客户端 push 资源。也就是说当服务器发现客户端请求了资源 A，却忘了请求资源 A 依赖的资源 B 时，它可以主动将资源 B 顺手推送给客户端")]),_._v(" "),v("p",[_._v("这样一来，当客户端发现漏掉一个必要请求的时候，直接从缓存中就可以读到资源 B，而不必再消耗一个请求")]),_._v(" "),v("p",[v("strong",[_._v("多路复用")])]),_._v(" "),v("p",[_._v("一次连接建立后，只要这个连接还在，那么客户端就可以在一个链接中批量发起多个请求")]),_._v(" "),v("p",[_._v("同时，请求与请求间完全不阻塞，高度独立，实现并行请求")])])}),[],!1,null,null,null);t.default=a.exports}}]);