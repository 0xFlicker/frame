# frame

Frame connector for wagmi v2

# usage

```js
import { frameConnector, frameTransport } from "@0xflick/frame";
import { connect, createConfig } from "@wagmi/core";
import { mainnet, sepolia, base } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [mainnet, sepolia, base],
  transports: {
    [mainnet.id]: frameTransport(),
    [sepolia.id]: frameTransport(),
    [base.id]: frameTransport(),
  },
});

await connect(config, {
  connector: frameConnector(),
});

// use config and all other wagmi actions as normal
```
