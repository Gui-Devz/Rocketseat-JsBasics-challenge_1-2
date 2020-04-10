// Creating an array and running by it

const users = [
    {
        name: "Carlos",
        tecnologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Jasmine",
        tecnologies: ["JavaScript", "CSS"]
    },
    {
        name: "Tuane",
        tecnologies: ["HTML", "Node.js", "React", "React Native", "CSS"]
    }
]

for (let i = 0; i < users.length; i++) {
    let name = users[i].name;
    let tecnologies = "";

    for (let u = 0; u < users[i].tecnologies.length; u++) {
        tecnologies += users[i].tecnologies[u];

        if (u < users[i].tecnologies.length - 1) {
            tecnologies += ", ";
        }
    }
    let userWorksWithCss = checkIfUsersUseCss(users[i])

    if (userWorksWithCss) {
        console.log(`${name} works with ${tecnologies}`);
    }
}

function checkIfUsersUseCss(users) {
    for (let i = 0; i < users.tecnologies.length; i++) {
        let tecsUsed = users.tecnologies[i];

        if (tecsUsed === "CSS") {
            return true
        }
    } return false;
}