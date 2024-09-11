let N=1000;

for (p = 1; p < N; p++) {
    
    let perfNum=((2**(p-1)) * (2**p-1));

    if (perfNum < N) {
        console.log ("Досконале число " + perfNum);
    continue;
    }
}