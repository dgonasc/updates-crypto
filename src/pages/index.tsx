import { Inter } from 'next/font/google'
import CryptoList from './CryptoList'
import { SWRConfig } from 'swr'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
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
