export default class RobotName {

    constructor(){
        this.usedNames = new Set()
        this.name= this.makeName()
    }
regenerateName(){
    this.name=this.makeName()
    if(this.usedNames.has(this.name)){
        this.regenerateName()
    } 
}

makeName() {
    let result = '';
    let numbers = '0123456789'
    let alphaUpperCase= ''
    for (let i = 65; i < 91; i++) {
        alphaUpperCase+=String.fromCharCode(i)
    }
    //ajout des maj
    for ( var i = 0; i < 2; i++ ) {
       result += alphaUpperCase.charAt(Math.floor(Math.random() * alphaUpperCase.length))
    }
    // ajout des chiffres
    for ( var i = 0; i < 3; i++ ) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length))
     }

     if(this.usedNames.has(result)){
        this.makeName()
     }

    this.usedNames.add(this.name)
     
    return result
 }


}


