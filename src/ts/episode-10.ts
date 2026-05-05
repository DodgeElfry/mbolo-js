// Episode 10 : Calculer le total a payer avec remise eventuelle

export function episode10(): void {
  const entree: string = prompt("Entrez le montant de la facture (en F) :") ?? "0";
  const montant: number = parseFloat(entree);
  let totalAPayer: number;

  if (montant > 40000) {
    const remise: number = montant * 0.10;
    totalAPayer = montant - remise;
    alert(`Remise de 10% appliquee. Total a payer : ${totalAPayer} F`);
  } else {
    totalAPayer = montant;
    alert(`Aucune remise applicable. Total a payer : ${totalAPayer} F`);
  }
}
