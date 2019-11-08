export default function pangram(sentence) {
<<<<<<< HEAD

   sentence= sentence.toLowerCase()
    let alphabet= []
    for(let i=97;i<123;i++){
        alphabet.push(String.fromCharCode(i))
    }
    for (let lettre of alphabet){
        if(!(sentence.includes(lettre))){
            return false
        }
    }
    return true


}
=======
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
>>>>>>> 9bd9ec93927e9d44209630f3faad77d4aca1c88a
