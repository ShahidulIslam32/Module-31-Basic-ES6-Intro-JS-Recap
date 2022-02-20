
function add(request){
    const one = 'Shahidul islam'
    const two = 'Khan'
    const count = 2
    const output = `first name: ${one} and last name: ${two}, his earning: ${count * 500} BD/-`
    return output
}

const declare = add()
console.log(declare);