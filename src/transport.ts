import { custom } from "@wagmi/core";

import ethProvider from "eth-provider";

export const frameTransport = () => custom((ethProvider as any)("frame"));
