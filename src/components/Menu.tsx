import Link from "next/link";

export default function Menu() {
    return(
        <>
            <div className="fixed top-0 flex justify-between w-screen border-b-2 border-black bg-opacity-70 bg-amber-100">
                <p className="m-4 ml-8 text-3xl font-bold border-0 ">Crypto Update</p>
                <ul className="flex gap-6 m-4 mr-12 text-xl font-bold ">
                    <li className="p-1 px-6 border-2 border-black shadow-xl rounded-xl">
                        <Link href="/">Market</Link>
                    </li>
                    <li className="p-1 px-6 border-2 border-black shadow-xl rounded-2xl">
                        <Link href="/ListNews">News</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}