import getURLParameters from "@/helpers/getURLParameters";

export default function objectToURLParams(obj) {
    const validEntries = Object.entries(obj)
        .filter(([key, value]) => value !== undefined && value !== null);

    if (validEntries.length === 0) {
        return ''; // Retorna uma string vazia se não houver entradas válidas
    }

    return validEntries
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value || '')}`)
        .join('&');
}