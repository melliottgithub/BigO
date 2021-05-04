const { reduce } = require("lodash");

/*
k = 6;
a = [1,2,3,4,9];
output = 2; 
*/
a = [5,2,7,4,9];
k = 5;
output = 4;

// cutTheRibbons(a, k) = 2

function satisfyConstraint (cuts, k) {
    const ribbons = cuts.reduce((prev, curr) => prev + curr, 0);
    return ribbons >= k;
}

function cutOptions (a, k) {
    const maxIter = a.reduce((a,b) => Math.max(a,b), 0);
    const options = [];
    for (let i=1; i<=maxIter; i++) {
        const cuts = a.map(len => Math.floor(len /i)).filter(len => len >= 1);
        if (satisfyConstraint(cuts, k)) {
            options.push({
                len: i,
                cuts: cuts
            });
        }
        // console.log(i, cuts);
    }
    return options;
}

console.log('k',k);
console.log('a', a);

const options = cutOptions(a, k);
console.log('options', options);
// find optimal solution: Maximize ribbon length
options.sort((a,b) => b.len - a.len);
console.log('solution', options[0]);