import axios from "axios";
import {redirect} from "next/navigation";

export async function getData(path, fields = {}) {

    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    try {
        let response = {}

        if(fields instanceof FormData){
            response = await api.post(path, fields, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }else if (Object.keys(fields).length !== 0) {
            response = await api.post(path, fields)
        } else {
            response = await api.get(path)
        }

        return response.data;
    } catch (error) {
        redirect('/404')
    }
}