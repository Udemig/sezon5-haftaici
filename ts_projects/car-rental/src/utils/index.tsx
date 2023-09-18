// api key
const headers = {
  'X-RapidAPI-Key':
    '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
};

// api'dan araba verilerini alır
export async function fetchCars() {
  const res = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers }
  );

  const data = await res.json();

  return data;
}
