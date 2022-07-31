let data = [
    {
        name: 'Kirito',
        age: '17'
    },
    {
        name: 'Asuna',
        age: '18'
    },
    {
        name: 'Klein',
        age: '25'
    },
    {
        name: 'Leafa',
        age: '17'
    },
    {
        name: 'Eugeo',
        age: '19'
    },
    {
        name: 'Sinon',
        age: '17'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return `<div>${item.name} is ${item.age} years old</div>`;
    
});

info.innerHTML = details.join('\n');
