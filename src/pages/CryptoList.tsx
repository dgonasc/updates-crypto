import { useFetch } from "@/hooks/useFetch"
import React from "react"

interface Crypto {
    symbol: string,
    lastPrice: string,
    priceChangePercent: string,
    count: number
}

const name = ["BTCUSDT","ETHUSDT","BNBUSDT","ADAUSDT","MATICUSDT","XRPUSDT","DOGEUSDT","SOLUSDT","TRXUSDT","USDCUSDT","LTCUSDT","DOTUSDT","TRXUSDT","EOSUSDT","ETCUSDT","LINKUSDT","WAVESUSDT","OMGUSDT","THETAUSDT"]

const CryptoList: React.FC =  () => {
    const { data, error } = useFetch<Crypto[]>('https://api.binance.com/api/v3/ticker/24hr')

    if (!data) {
        return <p className="flex justify-center m-10 text-4xl font-bold tracking-widest text-gray-700 mt-36">Wait...</p>
    }
    if (error) {
        return <p>Failed..</p>
    }

    const filteredData = data.filter((symbols: any) => symbols.symbol.includes("USDT") && symbols.priceChangePercent != 0);
    filteredData.sort((a: { count: number }, b: { count: number }) =>  b.count - a.count);

    return (
        <>
            <div className="mt-24">
                <ul className="static grid items-center justify-center grid-cols-1 gap-2 mx-10 mb-4 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredData.map((symbols: any) => {
                        let name = symbols.symbol.replace("USDT", '')
                        let color = ' bg-green-800'
                        if (symbols.priceChangePercent < '0')  {
                            color = ' bg-red-800'
                        }
                        return (
                            <li className={"flex items-center justify-between border-2 rounded-3xl p-2 sm:px-9 shadow-lg border-white shadow-white" + color} key={symbols.symbol}>
                                <h2 className="font-serif text-3xl font-semibold tracking-widest text-gray-100 ">{name}</h2>
                                <div className="grid justify-center">
                                    <h3 className="my-2 font-serif text-3xl font-semibold tracking-widest text-gray-100">$ {parseFloat(symbols.lastPrice)}</h3>
                                    <h4 className="ml-10 font-serif text-lg text-gray-100 ">{parseFloat(symbols.priceChangePercent)} %</h4>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default  CryptoList;