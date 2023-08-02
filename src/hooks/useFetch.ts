//Using Binance API
import UseSWR from 'swr'

export function useFetch<Data = any>(url: string) {
    const { data, error } = UseSWR(url, async url => {
        const response = await fetch(url)
        const data = await response.json();

        return data;
    })

    return {data, error}
}

// //Using CoinMarketCap API
// import UseSWR from 'swr';

// export function useFetch<Data = any>(url: string, token: string) {
//     const { data, error } = UseSWR(url, async (url) => {
//         const response = await fetch(url, {
//         headers: {
//             'X-CMC_PRO_API_KEY': `${token}`,
//         },
//         // method: 'GET'
//         });
//         const data = await response.json();

//         return data;
//     });

//     return { data, error };
// }
