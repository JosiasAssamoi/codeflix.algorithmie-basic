export default class GradeSchool {

    constructor(){
        this.students=new Map()
        this.names = new Array()
    }
    getAllStudents(){
        return this.students


    }

    addStudent(name, grade){
        grade = String(grade)
        //name = [name]
        let names = this.students.get(grade)
        if (names){
            names.push(name)
            names.sort()
        }
        else {
            names = [name]
        }
        this.students.set(grade,names)
    }
    getGradeStudents(grade){
       return this.students.get(String(grade)) === undefined ? [] : this.students.get(String(grade))
    }
        
        
        
}