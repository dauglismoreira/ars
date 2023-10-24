'use client'
import axios from "axios";
import {useState} from "react";

export default function usePostData() {
    const [getErrors, setErrors] = useState(null)
    const [getResponse, setResponse] = useState(null)

    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    const send = (path, fields = {}) => {
        api.post(path, fields).then((res => {
            setResponse(res)
        })).catch(err => {
            setErrors(err)
        })
    }

    return {getResponse, getErrors, send}
}