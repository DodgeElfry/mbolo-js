// Episode 2 : Demander le nom de l'utilisateur et afficher un message de bienvenue

export function episode2(): void {
  const nom: string = prompt("Quel est votre nom ?") ?? "";

  alert(`Bonjour ${nom}`);
}
