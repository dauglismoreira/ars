export default function shareOnLinkedin(){
    let url = window.location.href;
    let encodedUrl = encodeURIComponent(url);
    let linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=` + encodedUrl;

    window.open(linkedinUrl, "_blank");
}