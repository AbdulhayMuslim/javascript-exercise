// List of cities
const cities = [
  "Kabul",
  "Herat",
  "Mazar-i-Sharif",
  "Kandahar",
  "Jalalabad",
  "Bamyan",
  "Fayzabad",
  "Ghazni",
  "Pul-e-Khumri",
  "Lashkar Gah"
];

// Function to get a random city
function getRandomCity() {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

// Example usage
alert(getRandomCity());
