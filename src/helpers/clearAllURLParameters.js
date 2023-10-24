export default function clearAllURLParameters() {
    let url = new URL(window.location.href);

    url.search = '';

    window.history.replaceState({}, document.title, url.href);
}
