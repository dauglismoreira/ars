'use client'

import {useEffect, useState} from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import useFeedList from "@/hooks/useFeedList";
import useFilter from "@/hooks/useFilter";
import objectToURLParams from "@/helpers/objectToURLParams";
import getURLParameters from "@/helpers/getURLParameters";
import Dump from "@/impacte/Dump";
import { EnterpriseGrid } from '..';

interface ListProps {
    cities:any;
    status:any;
  }

export default function List({ cities, status }: ListProps){
    const [getMoreItems, setMoreItems] = useState(true)
    const {isScrolledToElement} = useScrollPosition('get-more-items')
    const {feed, loading, nextPage, fetchData, fetchMoreData} = useFeedList('empreendimentos-feed')
     const {query, handleTerm} = useFilter({
         search: '',
     })
/* eslint-disable react-hooks/exhaustive-deps */
     useEffect(() => {
         if (objectToURLParams(getURLParameters()) && objectToURLParams(getURLParameters()) !== '') {
            // @ts-ignore
            fetchData(objectToURLParams(getURLParameters()))
         } else {
            fetchData(query)
         }
     }, [query])
/* eslint-disable react-hooks/exhaustive-deps */
    const handleURLParametersChange = () => {
        if (objectToURLParams(getURLParameters()) !== '') {
            // @ts-ignore
            fetchData(objectToURLParams(getURLParameters()))
        } else {
            fetchData(query)
        }
    };

    if (isScrolledToElement && getMoreItems && nextPage) {
        fetchMoreData(query)
        setMoreItems(false)
    }

    if (!isScrolledToElement && !getMoreItems) {
        setMoreItems(true)
    }

    const newStatus: any[] = status.map((status: any) => ({
        value: status,
        label: status,
      }));

    const newCities: any[] = cities.map((city: any) => ({
        value: city.id,
        label: city.name,
      }));

    return (
        <>
            {/* <Dump obj={feed}/> */}

            <EnterpriseGrid
                data={feed}
                loading={loading}
                citiesFilter={newCities}
                statusFilter={newStatus}
                onURLParametersChange={handleURLParametersChange} 
            />
        </>
    )
}