import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CustomFilter from "./../components/CustomFilter/index";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "./../constants/index";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
  // state i ve statte tutacagımız verinin tipini tanımlama
  const [cars, setCars] = useState<CarType[]>([]);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // urldeki bütün parametreleri alır ve obje oluşturur
    const paramsObj = Object.fromEntries(params.entries());

    // araba verilerini al
    fetchCars(paramsObj).then((res: CarType[]) => setCars(res));
  }, [params]);

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        {/* filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </div>

        {!cars || cars.length < 1 ? (
          // arabalar gelmediyse ekrana uyarı basılır
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
