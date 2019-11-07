export default function transcription(words) {

    let newWords=""
    const dict= {A: 'U' ,C :'G' , G: 'C',T:'A' }

    for (const letter of words){
        if(!(letter in dict)){
            throw "Nucleotide "+letter+" does not exist"
        }
        newWords+=dict[letter]
    }

    return newWords




}