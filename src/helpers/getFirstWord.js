export default function getFirstWord(str) {
    if (str === "") {
        return {firstWord: "", remainingString: ""};
    }

    const words = str.split(" ");
    const firstWord = words[0];
    const remainingString = str.slice(firstWord.length).trim();

    return {firstWord, remainingString};
}
