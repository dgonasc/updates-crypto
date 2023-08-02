// import { useFetch } from "@/hooks/useFetch"
// import React from "react"

// interface Crypto {
//     symbol: string,
//     // lastPrice: string,
//     // priceChangePercent: string,
//     // volume: number
// }

// const CryptoListMKT: React.FC =  () => {
//     const token = process.env.TOKEN_MKTCAP;
//     const { data } = useFetch<Crypto[]>('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', token)

//     if (!data) {
//         return <p className="flex justify-center m-10 text-4xl font-bold tracking-widest text-gray-100">Loading...</p>
//     }

//     // const filteredData = data.filter((symbols: any) => symbols.volume > 10000000.00 && symbols.symbol.includes("USDT") );
//     // const filteredData = data.filter((data: any) => data.symbol.includes("USDT") );

//     return (
//         <div>
//             <h1 className="flex justify-center m-5 text-4xl font-bold">Crypto Update</h1>
//             <ul className="grid items-center justify-center grid-cols-1 gap-2 mx-10 lg:grid-cols-2 xl:grid-cols-4">
//                 {data.map((data: any) => {
//                     // let name = data.symbol.replace("USDT", '')
//                     let color = ' bg-green-800'
//                     // if (data.priceChangePercent < '0')  {
//                     //     color = ' bg-red-800'
//                     // }
//                     return (
//                         <li className={"flex items-center justify-between border-2 rounded-3xl p-2 sm:px-9 shadow-lg border-black shadow-black" + color} key={data.symbol}>
//                             <h2 className="font-serif text-3xl font-semibold tracking-widest text-gray-100 ">{data.symbol}</h2>
//                             <div className="grid justify-center">
//                                 {/* <h3 className="my-2 font-serif text-3xl font-semibold tracking-widest text-gray-100">$ {parseFloat(data.lastPrice)}</h3>
//                                 <h4 className="ml-10 font-serif text-xl text-gray-100 ">{parseFloat(data.priceChangePercent)} %</h4> */}
//                             </div>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default  CryptoListMKT;