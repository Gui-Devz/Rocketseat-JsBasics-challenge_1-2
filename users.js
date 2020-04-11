// Creating an array and running by it

const users = [
    {
        name: "Carlos",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Jasmine",
        technologies: ["JavaScript", "CSS"]
    },
    {
        name: "Tuane",
        technologies: ["HTML", "Node.js", "React", "React Native", "CSS"]
    }
]

function checkIfUsersUseCss(users) {
    for (let i = 0; i < users.technologies.length; i++) {
        let tecsUsed = users.technologies[i]

        if (tecsUsed === "CSS") {
            return true
        }
    } return false
}

//First defines where to put ", " and the " and " in sentence
//Then shows all the users and technologies used by them
for (let i = 0; i < users.length; i++) {
    let name = users[i].name
    let technologies = ""

    for (let u = 0; u < users[i].technologies.length; u++) {
        technologies += users[i].technologies[u]

        if (u < users[i].technologies.length - 2) {
            technologies += ", "
            
        } else if (u < users[i].technologies.length - 1) {
            technologies += " and "
        }
    }

    let userWorksWithCss = checkIfUsersUseCss(users[i])

    if (userWorksWithCss) {
        console.log(`${name} works with ${technologies}`)
    }
}