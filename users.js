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

for (let i = 0; i < users.length; i++) {
    let name = users[i].name
    let technologies = ""

    for (let u = 0; u < users[i].technologies.length; u++) {
        technologies += users[i].technologies[u]

        if (u < users[i].technologies.length - 1) {
            technologies += ", "
        }
    }
    let userWorksWithCss = checkIfUsersUseCss(users[i])

    if (userWorksWithCss) {
        console.log(`${name} works with ${technologies}`)
    }
}

function checkIfUsersUseCss(users) {
    for (let i = 0; i < users.technologies.length; i++) {
        let tecsUsed = users.technologies[i]

        if (tecsUsed === "CSS") {
            return true
        }
    } return false
}