// Episode 3 : Demander deux nombres et afficher leur somme

export function episode3(): void {
  const entree1: string = prompt("Entrez le premier nombre :") ?? "0";
  const nombre1: number = parseFloat(entree1);

  const entree2: string = prompt("Entrez le deuxieme nombre :") ?? "0";
  const nombre2: number = parseFloat(entree2);

  const somme: number = nombre1 + nombre2;

  alert(`La somme de ${nombre1} et ${nombre2} est : ${somme}`);
}
