import { useMemo, useState } from 'react';
import { makes } from '../../constants';
import { IOption } from '../../types';
import SearchButton from './SearchButton';
import Select from 'react-select';

const SearchBar = () => {
  const [make, setMake] = useState('');

  // useMemo hook'u bir değeri hesapalamak ve bu değeri
  // bir sonraki render sırasında hesaplamadan önce
  // önbellekte saklamak için kullanılır
  // bu performansı arttırmada yardımcı olur
  // maliyetli işlemler yapılıyorsa tercih edilmelidir
  // gereksiz yeniden hesaplamaların önüne geçer
  // string dizisini label ve ve value sahip obje dizisine çevirme
  const options: IOption[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  console.log('bileşen render oldu ayarlkar tekrardan hesaplandı');

  return (
    <form className="searchbar gap-3">
      {/* marka seçme */}
      <div className="searchbar__item text-black">
        <Select
          className="w-full"
          options={options}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
      </div>
      {/* model seçme alanı */}
      <div className="searchbar__item"></div>

      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
