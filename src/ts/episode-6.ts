// Episode 6 : Demander trois nombres et afficher leur moyenne

export function episode6(): void {
  const entree1: string = prompt("Entrez le premier nombre :") ?? "0";
  const nombre1: number = parseFloat(entree1);

  const entree2: string = prompt("Entrez le deuxieme nombre :") ?? "0";
  const nombre2: number = parseFloat(entree2);

  const entree3: string = prompt("Entrez le troisieme nombre :") ?? "0";
  const nombre3: number = parseFloat(entree3);

  const moyenne: number = (nombre1 + nombre2 + nombre3) / 3;

  alert(`La moyenne de ${nombre1}, ${nombre2} et ${nombre3} est : ${moyenne}`);
}
