import Link from "next/link";

export default function Menu() {
    return(
        <>
            <div className="fixed top-0 flex justify-between w-screen text-gray-500 bg-gray-400 border-b-2 border-gray-300 border-spacing-1 bg-opacity-80">
                <p className="m-2 my-6 ml-3 text-xs font-bold border-0 sm:ml-8 lg:text-3xl">Crypto Update</p>
                <ul className="flex items-center justify-center gap-1 my-4 mr-3 text-xl font-bold sm:gap-6 sm:mr-12 ">
                    <li className="p-1 px-3 text-xs border-2 border-gray-500 sm:text-lg rounded-xl border-opacity-30">
                        <Link href="/">CoinCap</Link>
                    </li>
                    <li className="p-1 px-3 text-xs border-2 border-gray-500 sm:text-lg border-opacity-30 rounded-xl">
                        <Link href="/Binance">Binance</Link>
                    </li>
                    <li className="p-1 px-3 text-xs border-2 border-gray-500 sm:text-lg rounded-xl border-opacity-30">
                        <Link href="/ListNews">News</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}