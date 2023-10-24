import {useEffect, useState} from "react";
import updateURLParameters from "@/helpers/updateURLParameters";
import objectToURLParams from "@/helpers/objectToURLParams";
import getURLParameters from "@/helpers/getURLParameters";
import clearAllURLParameters from "@/helpers/clearAllURLParameters";

export default function useFilter(values = {}) {
    const [terms, setTerms] = useState(values)
    const [query, setQuery] = useState(null)

    const handleTerm = (input) => {
        setTerms(fields => ({
            ...fields,
            [input.name]: input.value,
        }))
    }

    useEffect(() => {

        const queryParameters = objectToURLParams(terms)

        if (queryParameters.length) {
            setQuery(queryParameters)

            updateURLParameters(queryParameters)
        } else {
            setQuery('')
        }
    }, [terms]);

    const clearFilter = () => {
        clearAllURLParameters()

        location.reload()
    }

    return {query, handleTerm, clearFilter}
}