// Episode 12 : Calculer la somme des 10 premiers entiers a partir de 1

export function episode12(): void {
  let somme: number = 0;

  for (let i = 1; i <= 10; i++) {
    somme += i;
  }

  console.log(`La somme des 10 premiers entiers (1 a 10) est : ${somme}`);
}
