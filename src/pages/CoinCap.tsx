import Menu from "@/components/Menu";
import { useFetch } from "@/hooks/useFetch"
import React from "react"

interface Crypto {
    id: string,
    rank: number,
    symbol: string,
    name: string,
    supply: number,
    maxSupply: number,
    marketCapUsd: string,
    volumeUsd24Hr: number,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: number
}

const CryptoListCCap: React.FC =  () => {
    const { data, error } = useFetch<Crypto[]>('https://api.coincap.io/v2/assets');
    console.log(data);

    if (!data) {
        return <p className="flex justify-center m-10 text-4xl font-bold tracking-widest text-gray-700 mt-36">Wait...</p>
    }
    if (error) {
        return <p>Failed..</p>
    }

    const filteredData = data.data.filter((symbols: any) => symbols.rank < 21 && symbols.changePercent24Hr != 0);
    filteredData.sort((a: { rank: number }, b: { rank: number }) =>  a.rank - b.rank);

    return (
        <>
            <Menu />
            <h1 className="flex items-center justify-center m-8 text-3xl font-semibold uppercase mt-28 text-slate-500">API CoinCap</h1>
            <div className="mt-2 sm:mt-6">
                <ul className="static grid items-center justify-center grid-cols-1 gap-2 mx-10 mb-4 lg:grid-cols-3 xl:grid-cols-4">
                {filteredData.map((symbols: any) => {
                    let color = ' bg-green-800 opacity-90'
                    if (symbols.changePercent24Hr < '0')  {
                        color = ' bg-red-800 opacity-90'
                    }

                    return (
                        <div key={symbols.id}>
                            <li className={"flex items-center justify-between border-2 rounded-3xl p-2 sm:px-9 shadow-lg border-white shadow-white" + color} key={symbols.id}>
                            <h2 className="font-serif text-2xl font-semibold tracking-widest text-gray-100 uppercase">{symbols.symbol}</h2>
                            <div className="grid justify-center">
                                <h3 className="my-2 font-serif text-2xl font-semibold tracking-widest text-gray-100">$ {parseFloat(symbols.priceUsd).toFixed(2)}</h3>
                                <h4 className="ml-10 font-serif text-lg text-gray-100 ">{parseFloat(symbols.changePercent24Hr).toFixed(2)} %</h4>
                            </div>
                            </li>
                        </div>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

export default  CryptoListCCap;