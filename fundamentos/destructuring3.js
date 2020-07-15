function rand({min = 0, max=1000}){
    min = min+1
    const valor = Math.random()*(max-min+1) + min
    return Math.floor(valor)
}


const obj = { max: 3, min: 1}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
console.log(rand())