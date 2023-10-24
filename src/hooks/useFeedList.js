import {useState} from "react";
import {getData} from "@/helpers/getData";

export default function useFeedList(path) {
    const [feed, setFeed] = useState([])
    const [nextPage, setNextPage] = useState([])
    const [loading, setLoading] = useState(true)
    const [getResponse, setResponse] = useState([])

    const fetchData = async (query = null) => {
        setLoading(true)

        const data = await getData(path + `?${query}`)

        setResponse(data)
        setFeed(() => [...[], data.models])

        setNextPage(data.models.next_page_url)

        setLoading(false)
    }

    const fetchMoreData = async (query) => {
        setLoading(true)

        const data = await getData(nextPage + `&${query}`)

        setResponse(data)
        setFeed((feed) => [...feed, data.models])

        setNextPage(data.models.next_page_url)

        setLoading(false)
    }

    return {feed, getResponse, nextPage, loading, fetchData, fetchMoreData}
}