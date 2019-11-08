<<<<<<< HEAD
export default function bob (sentence="") {

    if (sentence.match(/.+\?/g)){
        return 'Sure'
    }
    else if (sentence.match(/.+\!/g)){
        return 'Whoa, chill out!'
    }
    else if (sentence.toLocaleLowerCase() == "bob"){
        return 'Fine. Be that way!'
    }
    else{
        return'Whatever'
    }



=======
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
>>>>>>> 9bd9ec93927e9d44209630f3faad77d4aca1c88a
}