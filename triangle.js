a = [1,2,2,4];
// canMakeTriangle(a) = [1,0]

//a = [2,10,2,10,2];
// canMakeTriangle(a) = [0, 1, 0]


// condition
// a + b > c and a +c > b and b +c > a

function canMakeTriangle (a) {
    const output = [];
    const isTriangle = (a, b, c) => (a + b > c) && (a +c > b) && (b +c > a);

    for (let i=0; i<a.length-2; i++) {
        const points = a.slice(i, i+3);
        output.push(isTriangle(...points) ? 1 : 0);
    }
    return output;
}

console.log('a', a);

console.log('output', canMakeTriangle(a));