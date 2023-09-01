import Link from "next/link";

export default function Menu() {
    return(
        <>
            <div className="fixed top-0 flex justify-between w-screen text-gray-500 bg-gray-400 border-b-2 border-gray-300 border-spacing-1 bg-opacity-80">
                <p className="m-4 ml-8 text-3xl font-bold border-0">Crypto Update</p>
                <ul className="flex gap-6 m-4 mr-12 text-xl font-bold ">
                    <li className="p-1 px-6 border-2 border-gray-500 rounded-xl">
                        <Link href="/">CoinCap</Link>
                    </li>
                    <li className="p-1 px-6 border-2 border-gray-500 rounded-xl">
                        <Link href="/Binance">Binance</Link>
                    </li>
                    <li className="p-1 px-6 border-2 border-gray-500 rounded-2xl">
                        <Link href="/ListNews">News</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}