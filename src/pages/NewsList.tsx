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

const tokenNews = process.env.NEWS

const ListNews: React.FC =  () => {
    const { data } = useFetch<ListNews[]>('https://newsapi.org/v2/everything?q=crypto&apiKey=e1f2a77104144cee92bfc6693320c8a6')
    console.log(data);

    if (!data) {
        return <p className="flex justify-center m-10 text-4xl font-bold tracking-widest text-gray-100">Loading...</p>
    }

    return (
        <div>
            <Menu />
            <div>
                <ul className="grid justify-center grid-cols-2 gap-4 m-4">
                    {data.articles.map((id: any) => {
                        let date = id.publishedAt.slice(5,7);
                        let now = new Date();
                        let filterDate = now.toString().slice(4, 7)
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

                        if(filterDate == date) {
                            return (
                                <>
                                    <Link href={id.url} target="blank">
                                        <ul className="grid gap-2 p-2 border-2 border-black rounded-lg cursor-pointer h-36">
                                            <li className="text-xl">{id.title}</li>
                                            {/* <li>
                                                <Image
                                                src={id.urlToImage}
                                                alt="News Image"
                                                width={300}
                                                height={180}
                                                />
                                            </li> */}
                                            <li className="text-sm ">{id.description}</li>
                                            <li className="text-sm text-blue-900">{id.source.name}</li>
                                        </ul>
                                    </Link>
                                </>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default  ListNews;