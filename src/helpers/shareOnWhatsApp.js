export default function shareOnWhatsApp() {
    let url = window.location.href;
    let encodedText = encodeURIComponent('Dê uma olhada neste link: \n\n');
    let encodedUrl = encodeURIComponent(url);
    let whatsappUrl;

    if (window.innerWidth < 540) {
        whatsappUrl = "https://wa.me/?text=" + encodedText + " " + encodedUrl;
    } else {
        whatsappUrl = "https://web.whatsapp.com/send/?text=" + encodedText + " " + encodedUrl;
    }

    window.open(whatsappUrl, "_blank");
}