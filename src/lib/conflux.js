import { Conflux } from 'js-conflux-sdk'

import abiCoin from './abi/Coin.json'
import abiTickets from './abi/Tickets.json'
import abiSponsorWhitelistControl from './abi/SponsorWhitelistControl.json'

const conflux = new Conflux({
  url: process.env.REACT_APP_CONFLUX_NODE_RPC,
  defaultGasPrice: 100, // The default gas price of your following transactions
  defaultGas: 1000000, // The default gas of your following transactions
  logger: console,
})

export const ContractCoin = {
  name: 'Coin',
  abi: abiCoin,
  contract: conflux.Contract({
    abi: abiCoin,
    address: process.env.REACT_APP_CONFLUX_COIN_ADDRESS,
  }),
}

export const ContractTickets = {
  name: 'Tickets',
  abi: abiTickets,
  contract: conflux.Contract({
    abi: abiTickets,
    address: '0x8b017126d2fede908a86b36b43969f17d25f3770',// process.env.REACT_APP_CONFLUX_TICKETS_ADDRESS,
  }),
}

export const ContractSponsorWhitelistControl = {
  name: 'SponsorWhitelistControl',
  abi: abiSponsorWhitelistControl,
  contract: conflux.Contract({
    abi: abiSponsorWhitelistControl,
    address: '0x0888000000000000000000000000000000000001',
  }),
}

export default conflux