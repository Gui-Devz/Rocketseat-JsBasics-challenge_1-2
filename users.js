// Creating an array and running by it

const users = [
    {
        nome: "Carlos", 
        tecnologias: ["HTML", "CSS", "JavaScript"] 
    },
    {
        nome: "Jasmine", 
        tecnologias: ["JavaScript", "CSS"] 
    },
    { 
        nome: "Tuane", 
        tecnologias: ["HTML", "Node.js", "React", "React Native"] 
    }
]

for (let i = 0; i < users.length; i++) {
    let nome = users[i].nome;
    let tecnologias = "";
    for (let u = 0; u < users[i].tecnologias.length; u++) {
        tecnologias += users[i].tecnologias[u];
        if (u < users[i].tecnologias.length - 1){
            tecnologias += ", ";
        }
    }
    console.log(`${nome} trabalha com ${tecnologias}`);
}