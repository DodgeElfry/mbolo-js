// Episode 11 : Afficher la table de multiplication d'un nombre jusqu'a 10

export function episode11(): void {
  const entree: string = prompt("Entrez un nombre pour afficher sa table de multiplication :") ?? "0";
  const nombre: number = parseInt(entree);
  let table: string = `Table de multiplication de ${nombre} :\n`;

  for (let i = 1; i <= 10; i++) {
    const resultat: number = nombre * i;
    table += `${nombre} x ${i} = ${resultat}\n`;
  }

  alert(table);
}
