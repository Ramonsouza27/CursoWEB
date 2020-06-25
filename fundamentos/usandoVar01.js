{
    {
        {
            {// variaveis declaradas com var podem ser visualizadas dentro e fora do bloco de código (escopo)
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

//variaveis declaradas dentro de função somente são acessadas por dentro desta função
function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)