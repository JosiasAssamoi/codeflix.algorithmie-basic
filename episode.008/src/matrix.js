
 export default function strToMatrix(str) {
    let obj = {}

    let strRows=str.split('\n')
    let matRows = new Array()
    let matCols = new Array()
    
    
    for (let i in strRows){
        matCols[i]=new Array(strRows.length)
    }
    for (let i in strRows){
        let rows =strRows[i].split(' ').map(function(elt){return parseInt(elt)})     
        for (let j in rows){
            matCols[j][i]=rows[j]   
        }
        matRows.push(rows)
    }
   

    obj.rows= matRows
    obj.columns= matCols

    return obj
}


/*
  j j
  0 1
0 1 2    i
1 3 4    i

*/

