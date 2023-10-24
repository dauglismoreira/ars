export function abbreviatedDate(dateString) {
    if (!dateString?.length){
        return ''
    }

    const months = [
        'JAN', 'FEV', 'MAR', 'ABR',
        'MAI', 'JUN', 'JUL', 'AGO',
        'SET', 'OUT', 'NOV', 'DEZ'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}