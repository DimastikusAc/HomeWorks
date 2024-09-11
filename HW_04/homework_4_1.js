let N = 7;

if (N < 2) {
    console.log("Число " + N + " не є простим числом.");
} else {
        for (i = 2; i < N; i++) {
        if (N % i === 0) {
            console.log("Число " + N + " не є простим числом.");
            break;
        }
    }

        if (i === N) {
        console.log("Число " + N + " є простим числом.");
    }
}