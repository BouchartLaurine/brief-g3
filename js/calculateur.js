// Fonction pour effectuer le calcul d'émissions de CO2 par mois
function calculerEmissions() {
  const distance = parseFloat(document.getElementById("distance").value); // Distance en km
  const jours = parseInt(document.getElementById("nombre").value); // Nombre de jours par semaine

  // Vérification de la validité des entrées
  if (isNaN(distance) || isNaN(jours) || distance <= 0 || jours <= 0) {
    alert(
      "Veuillez entrer des valeurs valides pour la distance et le nombre de jours."
    );
    return;
  }

  // Calcul de l'émission de CO2 par trajet (en grammes)
  const co2ParKm = 120; // 120g de CO2 par km

  // Calcul des émissions pour une semaine (en grammes)
  const emissionsParSemaineEnGrammes = distance * jours * co2ParKm;

  // Calcul des émissions mensuelles (en grammes), en multipliant par 4.33 (nombre moyen de semaines dans un mois)
  const emissionsParMoisEnGrammes = emissionsParSemaineEnGrammes * 4.33;

  // Conversion des émissions en kilogrammes (1 kg = 1000g)
  const emissionsParMoisEnKg = emissionsParMoisEnGrammes / 1000; // Conversion en kg

  // Afficher le résultat dans la page
  const resultatDiv = document.getElementById("resultat-emissions");
  resultatDiv.innerHTML = `Vous émettez environ <strong>${emissionsParMoisEnKg.toFixed(
    2
  )}</strong> kg de CO2 par mois pour ${jours} jours de trajets domicile/travail.`;
}
