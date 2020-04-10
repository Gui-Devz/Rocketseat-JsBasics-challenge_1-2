//Creating objects and arrays

const programmer = {
    name: "Carlos",
    age: 32,
    technologies: [
        {
            name: 'C++', 
            specialties: 'Desktop' 
        },
        { 
            name: 'Python', 
            specialties: 'Data Science' 
        },
        { 
            name: 'JavaScript', 
            specialties: 'Web/Mobile' 
        }
    ]
}

console.log(`The user ${programmer.name} is ${programmer.age} years old and works with ${programmer.technologies[0].name} focused in ${programmer.technologies[0].specialties}`)

