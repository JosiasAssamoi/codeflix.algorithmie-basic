export default function bob(sentence = "") {
    if (sentence.match(/.+\?/g)) {
     return 'Sure'
    } else if (sentence.match(/.+\!/g)) {
     return 'Whoa, chill out!'
    } else if (sentence.toLocaleLowerCase() == "bob") {
     return 'Fine. Be that way!'
    } else {
     return 'Whatever'
    }
}