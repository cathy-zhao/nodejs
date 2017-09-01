# 使用

http 协议格式服务

- 启动服务

```bash
node server-http
```

- 访问服务

```bash
$ curl -i 127.0.0.1:8888
```

websocket 协议格式服务

- 启动服务

```bash
node server-ws
```

- 访问服务

```bash
$ wscat -c 192.168.1.100:8181
connected (press CTRL+C to quit)
    > {c: 'test'}

    < {"jk":"10","zg":"11","cjl":"12","hsl":"13","zd":"14","cje":"15"}
    > {d: 'testd'}

    < {"jk":"10","zg":"11","cjl":"12","hsl":"13","zd":"14","cje":"15"
```
