export default function shareOnFacebook() {
    let url = window.location.href;
    let encodedUrl = encodeURIComponent(url);
    let facebookUrl = `https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACE_APP_ID}&href=` + encodedUrl;

    window.open(facebookUrl, "_blank");
}