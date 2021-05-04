/*
firstnum = '10534';
secondnum = '67';
thirdnum = '1120';

-> erease 5th digits of firstnum => '1053'  and 1053+67=1120
*/

/*
firstnum = '10000';
secondnum = '67';
thirdnum = '1120';
*/
// -> false /0 


firstnum = '1067';
secondnum = '33';
thirdnum = '100';


function removeDigit (f, s, t) {
    const pass = (s1, s2, s3) => !s1.startsWith('0') && parseInt(s1) + parseInt(s2) === parseInt(s3);
    for (let i=0; i<f.length; i++) {
        const f2 = f.substring(0,i) + f.substring(i+1);
        if (pass(f2, s, t)) {
            console.log(' -> ', f2);
            return i+1;
        }
    }
    return false;
}

console.log('firstnum', firstnum);
console.log('secondnum', secondnum);
console.log('thirdnum', thirdnum);

console.log('output', removeDigit(firstnum, secondnum, thirdnum));