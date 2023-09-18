import Hero from '../components/Hero';
import { useEffect, useState } from 'react';
import { fetchCars } from '../utils';
import { ICarProps } from '../types';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import CustomFilters from './../components/CustomFilters';

interface Error {
  error?: string;
}

const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[]>([]);

  useEffect(() => {
    fetchCars() //
      .then((res: ICarProps[]) => setCars(res));
  }, []);

  // verinin dolu olup olmadğını kotrol etme
  const isDataEmpty: boolean =
    !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div>
      <Hero />

      <div
        id="catalogue"
        className="mt-12 padding-x padding-y max-width"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katoluğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        <div className="home__filter">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilters />
            <CustomFilters />
          </div>
        </div>

        {isDataEmpty ? (
          //arabalar gelmediyse erkana uyarı basılır
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı </h2>
          </div>
        ) : (
          // arabalar geldiyse ekrana kartlar basılır
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
