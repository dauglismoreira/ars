export default function updateURLParameters(parameters) {
    const newURL = `${window.location.pathname}?${parameters}`;
    window.history.replaceState({}, document.title, newURL);
}