// Episode 9 : Afficher la mention d'un eleve selon sa moyenne

export function episode9(): void {
  const entree: string = prompt("Entrez la moyenne de l'eleve (entre 0 et 20) :") ?? "0";
  const moyenne: number = parseFloat(entree);
  let mention: string;

  if (moyenne < 0 || moyenne > 20) {
    mention = "Moyenne invalide (doit etre entre 0 et 20)";
  } else if (moyenne >= 18) {
    mention = "Excellent";
  } else if (moyenne >= 16) {
    mention = "Tres bien";
  } else if (moyenne >= 14) {
    mention = "Bien";
  } else if (moyenne >= 12) {
    mention = "Assez-bien";
  } else if (moyenne >= 10) {
    mention = "Passable";
  } else {
    mention = "Insuffisant";
  }

  alert(`Mention : ${mention}`);
}
