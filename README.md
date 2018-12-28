# 开启ganache-cli

```bash
ganache-cli -m 助记词
```



# 修改provider

wallet.js

```
state = {
    wallets: [],// 支持多账户，默认第0个
    selectWallet: 0,
    provider: "http://127.0.0.1:8545", //环境
    }
```

# npm start

```
npm run start
```



# 启动 geth

```
geth attach your provider
```

查看账户

```
> eth.accounts
["0xfef3d415f66464c3b38e10fd5f31edbead7be44b", "0xfc26f518d2f7091667dbdd81ee04d1f17d122359", "0x5e7363aa3c0669083a554dde5ed548a8ec90ff12", "0x57060a8a16bff2615769282eb83d1b50891f04a9", "0xc1f109c747e70bbc85371bcb6fbdc8fe23219da9", "0x3d25841411dd7917c123d980f4dd33cad101cc31", "0x9b477be361d60597e24dd7838d29f706396a3fa1", "0x8adffcabe036474de3a6d6f513bfd6df19fbcc1f", "0x2394c966264c3794247136637e0dc9924dfad3d7", "0xbf513ae069d7a58eb4d0f8c6e17402dbe2cc1bee"]
> eth.getBalance(eth.accounts[0])
100000000000000000000
```





