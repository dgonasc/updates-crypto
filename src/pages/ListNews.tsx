import { useFetch } from "@/hooks/useFetch"
import React from "react"
import Image from "next/image"
import Menu from "@/components/Menu"
import Link from "next/link"

interface ListNews {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    id: string,
    name: string,
    publishedAt: string
}

const ListNews: React.FC =  () => {
    const { data, error } = useFetch<ListNews[]>('https://newsapi.org/v2/everything?q=crypto&apiKey=e1f2a77104144cee92bfc6693320c8a6')

    if (!data) {
        return <p className="flex justify-center m-10 text-4xl font-bold tracking-widest text-gray-700 mt-36">Wait...</p>
    }
    if (error) {
        return <p>Just in Dev Mode..</p>
    }

    const filteredDate = data.articles.filter((id: any) => id.urlToImage != null);
    console.log(filteredDate);

    return (
        <div>
            <Menu />
            <div className="mt-24">
                <h1 className="flex items-center justify-center m-8 text-3xl font-semibold uppercase mt-28 text-slate-500">Crypto News</h1>
                <ul className="static grid justify-center grid-cols-2 gap-4 m-4">
                    {filteredDate.map((id: any) => {
                        let date = id.publishedAt.slice(5,7);
                        let now = new Date();
                        let filterDate = now.toString().slice(4, 7);

                        if(
                        filterDate =='Jan' ? filterDate = '01' : filterDate =='Fev' ? filterDate = '02' :
                        filterDate =='Mar' ? filterDate = '03' : filterDate =='Apr' ? filterDate = '04' :
                        filterDate =='May' ? filterDate = '05' : filterDate =='Jun' ? filterDate = '06' :
                        filterDate =='Jul' ? filterDate = '07' : filterDate =='Aug' ? filterDate = '08' :
                        filterDate =='Sep' ? filterDate = '09' : filterDate =='Oct' ? filterDate = '10' :
                        filterDate =='Nov' ? filterDate = '11' : filterDate =='Dec' ? filterDate = '12' :
                        false)
                        {
                            filterDate
                        }
                        if(filterDate == date || filterDate != date) {
                            return (
                                <div key={id.url}>
                                    <div>
                                        <Link href={id.url} target="blank">
                                            <ul className="grid h-auto gap-2 p-2 text-gray-700 border-2 border-black rounded-lg cursor-pointer">
                                                <li className="text-lg uppercase border-b-2 border-black border-opacity-10 drop-shadow-3xl">{id.title}</li>
                                                <li className="flex items-center">
                                                    <Image
                                                    unoptimized
                                                    src={id.urlToImage}
                                                    alt="News Image"
                                                    width={300}
                                                    height={180}
                                                    className="w-1/3 rounded-xl"
                                                    />
                                                    <p className="ml-4 text-sm opacity-70">{id.description}</p>
                                                </li>
                                                <li className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Fonte: {id.source.name}</p>
                                                    <p className="text-xs text-gray-500">Data: {date}/{id.publishedAt.slice(0,4)}</p>
                                                </li>
                                            </ul>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default  ListNews;
