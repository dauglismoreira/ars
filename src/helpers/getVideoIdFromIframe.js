export default function getVideoIdFromIframe(iframeString) {
    if (iframeString?.length) {
        const regex = /embed\/([^?]+)/;
        const match = iframeString.match(regex);

        if (match && match[1]) {
            return match[1];
        }
    }

    return null;
}