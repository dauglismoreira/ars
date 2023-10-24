export default function truncateString(str, num) {
    if (!str?.length || (str.length <= num)) {
        return str;
    }

    return str.slice(0, num) + '...';
}