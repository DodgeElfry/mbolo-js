// Episode 4 : Permuter les valeurs de deux variables

export function episode4(): void {
  let a: number = 10;
  let b: number = 25;

  console.log(`Avant permutation : a = ${a}, b = ${b}`);

  const temp: number = a;
  a = b;
  b = temp;

  console.log(`Apres permutation : a = ${a}, b = ${b}`);
}
