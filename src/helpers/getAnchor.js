export default function getAnchor() {
    const url = window.location.href
    const anchorIndex = url.indexOf('#')

    if (anchorIndex !== -1) {
        return decodeURIComponent(url.substring(anchorIndex + 1))
    }

    return null
}