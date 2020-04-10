// Creating an array and running by it

const users = [
    {
        nome: "Carlos", 
        tecnologias: ["HTML", "CSS"] 
    },
    {
        nome: "Jasmine", 
        tecnologias: ["JavaScript", "CSS"] 
    },
    { 
        nome: "Tuane", 
        tecnologias: ["HTML", "Node.js"] 
    }
]

for (let i = 0; i < users.length; i++) {
    let nome = users[i].nome;
    let tecnologias = "";
    for (let u = 0; u < users[i].tecnologias.length; u++) {
        tecnologias += users[i].tecnologias[u];
        if (u < 1){
            tecnologias += ", ";
        }
    }
    console.log(`${nome} trabalha com ${tecnologias}`);
}