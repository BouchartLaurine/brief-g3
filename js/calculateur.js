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

  // Calcul de l'émission de CO2 par semaine (en grammes)
  const co2ParKm = 120; // Hypothèse : 120g de CO2 par km
  const emissionsParSemaine = distance * jours * co2ParKm;

  // Calcul des émissions par mois (en multipliant par 4,33 semaines par mois)
  const emissionsParMois = emissionsParSemaine * 4.33;

  // Afficher le résultat dans la page
  const resultatDiv = document.getElementById("resultat-emissions");
  resultatDiv.innerHTML = `Vous émettez environ <strong>${emissionsParMois.toLocaleString()}</strong> g de CO2 par mois.`;
}
