
const nemo = ['nemo', 'dory', 'bruce'];
const large = new Array(10000).fill('nemo')
function findNemo(arr) {
    let t0 = process.uptime();
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 'nemo'){
            console.log('Found Nemo!');
        }
    }
    let t1 = process.uptime();
    console.log(t1 - t0);
}

findNemo(nemo); // O(1)
findNemo(large); // O(n) ==> Linear Time