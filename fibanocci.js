let n1 = 0, n2 = 1, eded;

for (let i = 1; i <= +10; i++) {
    console.log(`Fibonacci Series: ${n1}`);
    eded = n1 + n2;
    n1 = n2;
    n2 = eded;
}
