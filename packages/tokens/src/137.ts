import { ChainId, WMATIC, ERC20Token, WNATIVE } from '@pancakeswap/sdk'
import { BUSD_POLY, CAKE_POLY } from './common'

export const polygonTokens = {
  wmatic: WNATIVE[ChainId.POLYGON],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  matic: new ERC20Token(
    ChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'MATIC',
    'MATIC',
    'https://polygon.technology/',
  ),
  cake: CAKE_POLY,
}
