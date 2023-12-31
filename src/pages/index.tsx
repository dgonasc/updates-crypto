import CryptoList from './Binance'
import { SWRConfig } from 'swr'
import Menu from '@/components/Menu'
import CryptoListCCap from './CoinCap'

export default function Home() {
  return (
    <div>
      <Menu />
      <SWRConfig
        value={{
          refreshInterval: 1000,
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
      <CryptoListCCap />
      </SWRConfig>
    </div>
  )
}
