import { useFetch } from "@/hooks/useFetch"
import React from "react"

interface Crypto {
    symbol: string,
    lastPrice: string,
    priceChangePercent: string
}

const name = ["BTCUSDT","ETHUSDT","BNBUSDT","ADAUSDT","MATICUSDT","XRPUSDT","DOGEUSDT","SOLUSDT","TRXUSDT","USDCUSDT","LTCUSDT","DOTUSDT"]

const CryptoList: React.FC =  () => {
    const { data } = useFetch<Crypto[]>('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","ADAUSDT","MATICUSDT","XRPUSDT","DOGEUSDT","SOLUSDT","TRXUSDT","USDCUSDT","LTCUSDT","DOTUSDT"]')

    if (!data) {
        return <p className="flex justify-center m-10 text-4xl font-bold tracking-widest text-gray-100">Loading...</p>
    }





    return (
        <div>
            <h1 className="flex justify-center m-5 text-4xl font-bold">Crypto Update</h1>
            <ul className="grid items-center justify-center grid-cols-1 gap-2 mx-10 lg:grid-cols-2 xl:grid-cols-4">
                {data.map((symbols: any) => {
                    let name = symbols.symbol.replace("USDT", '')
                    let color = ' bg-green-800'
                    if (symbols.priceChangePercent < 0)  {
                        color = ' bg-red-800'
                    }
                    return (
                        <li className={"flex items-center justify-between border-2 rounded-3xl p-2 sm:px-9 shadow-lg border-black shadow-black" + color} key={symbols.symbol}>
                            <h2 className="font-serif text-3xl font-semibold tracking-widest text-gray-100 ">{name}</h2>
                            <div className="grid justify-center">
                                <h3 className="my-2 font-serif text-3xl font-semibold tracking-widest text-gray-100">$ {parseFloat(symbols.lastPrice)}</h3>
                                <h4 className="ml-10 font-serif text-xl text-gray-100 ">{parseFloat(symbols.priceChangePercent)} %</h4>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default  CryptoList;