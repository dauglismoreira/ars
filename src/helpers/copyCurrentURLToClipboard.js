import {toast} from "react-toastify";

export default function copyCurrentURLToClipboard() {
    let currentURL = window.location.href;

    navigator.clipboard.writeText(currentURL).then(() => {

        toast.success('Link compiado para área de tranferência. 🔗', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: true,
            theme: "light",
        });
    });
}