export default function shareOnX(){
    let url = window.location.href;
    let encodedUrl = encodeURIComponent(url);
    let xUrl = `https://twitter.com/intent/tweet?url=` + encodedUrl;

    window.open(xUrl, "_blank");
}