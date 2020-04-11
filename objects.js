//Criando objetos

const company = {
    name: "Rocketseat",
    color: "Roxo",
    address: {
        street: "Rua Guilherme Gembala",
        number: 260
    }
}

//console.log('The company '+ company.name +' is located at '+ 
//          company.address.street +', '+ company.address.number);

console.log(`The company ${company.name} is located at ${company.address.street}, ${company.address.number}`);