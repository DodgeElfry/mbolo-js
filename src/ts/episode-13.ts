// Episode 13 : Boucler jusqu'a ce que l'utilisateur saisisse la bonne reponse

export function episode13(): void {
  const nombreA: number = 5;
  const nombreB: number = 1;
  const bonneReponse: number = nombreA + nombreB;
  let reponseUtilisateur: number;

  do {
    const entree: string = prompt(`Combien font ${nombreA}+${nombreB} ?`) ?? "";
    reponseUtilisateur = parseInt(entree);

    if (reponseUtilisateur !== bonneReponse) {
      alert("Mauvaise reponse, reessayez !");
    }
  } while (reponseUtilisateur !== bonneReponse);

  alert("Bravo ! C'est la bonne reponse !");
}
