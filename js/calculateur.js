// Fonction pour effectuer le calcul d'émissions de CO2 par mois
function calculerEmissions() {
  const distance = parseFloat(document.getElementById("distance").value);
  const jours = parseInt(document.getElementById("nombre").value);

  if (isNaN(distance) || isNaN(jours) || distance <= 0 || jours <= 0) {
    alert(
      "Veuillez entrer des valeurs valides pour la distance et le nombre de jours."
    );
    return;
  }

  // Calcul de l'émission de CO2 par jour (en grammes)
  const co2ParKm = 120; // 120g de CO2 par km
  const emissionsParJour = distance * co2ParKm;

  // Calcul des émissions par mois (en multipliant par le nombre moyen de jours dans un mois, soit 30.42 jours)
  const emissionsParMois = (emissionsParJour * jours * 30.42) / 1000; // Conversion en kg

  // Afficher le résultat dans la page
  const resultatDiv = document.getElementById("resultat-emissions");
  resultatDiv.innerHTML = `Vous émettez environ <strong>${emissionsParMois.toFixed(
    2
  )}</strong> kg de CO2 par mois.`;
}
