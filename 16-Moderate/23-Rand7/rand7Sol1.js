const rand7 = () => {
  while (true) {
    let num = (5 * Math.floor(Math.random() * 5)) + (Math.floor(Math.random() * 5));

    if (num <=20) return num % 7;
  }
}

for (let i=0; i<10; i++) {
  console.log(rand7())
}