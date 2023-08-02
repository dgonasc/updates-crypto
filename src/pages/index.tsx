import CryptoList from './CryptoList'
import { SWRConfig } from 'swr'
import Menu from '@/components/Menu'

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
        <CryptoList />
      </SWRConfig>
    </div>
  )
}
