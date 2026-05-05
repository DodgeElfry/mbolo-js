// Episode 7 : Determiner si l'utilisateur est mineur ou majeur

export function episode7(): void {
  const entree: string = prompt("Quel est votre age ?") ?? "0";
  const age: number = parseInt(entree);

  if (age >= 18) {
    alert("Vous etes majeur");
  } else {
    alert("Vous etes mineur");
  }
}
