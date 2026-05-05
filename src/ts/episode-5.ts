// Episode 5 : Demander un nombre et afficher son double

export function episode5(): void {
  const entree: string = prompt("Entrez un nombre :") ?? "0";
  const nombre: number = parseFloat(entree);

  const double: number = nombre * 2;

  alert(`Le double de ${nombre} est : ${double}`);
}
