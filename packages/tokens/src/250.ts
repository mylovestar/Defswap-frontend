import { ChainId, WFTM, ERC20Token, WNATIVE } from '@pancakeswap/sdk'
import { BUSD_FTM, CAKE_FTM } from './common'

export const fantomTokens = {
  wftm: WNATIVE[ChainId.FANTOM],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  ftm: new ERC20Token(
    ChainId.FANTOM,
    '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    18,
    'FTM',
    'FTM',
    'https://fantom.foundation/defi/',
  ),
  cake: CAKE_FTM,
  
  busd: BUSD_FTM,
  
}
