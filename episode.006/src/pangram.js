export default function pangram(sentence) {
    sentence = sentence.toLowerCase()
     let alphabet = []
    for (let i = 97; i < 123; i++) {
     alphabet.push(String.fromCharCode(i))
    }
    for (let lettre of alphabet) {
     if (!(sentence.includes(lettre))) {
        return false
     }
    }
    return true
}