// Episode 8 : Afficher une salutation selon le sexe de l'utilisateur

export function episode8(): void {
  const nom: string = prompt("Quel est votre nom ?") ?? "";
  const sexe: string = (prompt("Quel est votre sexe ? (M / F)") ?? "").toUpperCase();

  if (sexe === "M") {
    alert(`Bonjour monsieur ${nom}`);
  } else if (sexe === "F") {
    alert(`Bonjour madame ${nom}`);
  } else {
    alert("Sexe non reconnu. Veuillez saisir M ou F.");
  }
}
