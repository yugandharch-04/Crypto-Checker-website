import Axios from "axios";
import { useEffect, useState } from "react";
import Coin from "../Components/Coin";
import Refresh from "../img/refresh.png";

function Home() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const [error, setError] = useState(true);
  useEffect(() => {
    refreshPage();
    setError(true);
  }, []);
  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
  };

  function refreshPage() {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => {
        setIsLoading(false);
        setCoins(response.data);
      })
      .catch((res) => {
        setError(false);
      });
  }

  return (
    <div className="App">
      <div className="headerConatainer flex flex-col items-center mt-[30px] mb-[30px]">
        <h1 className="text-[white] text-[40px] font-medium mb-[30px]">
          Welcome to crypto checker website
        </h1>
        <div className="buttonCointainer flex flex-row items-center">
          <input
            type="text"
            placeholder="Search for a Coin"
            onChange={handleSearch}
            className="placeholder-white hover:scale-105 hover:[transition:all_ease-in-out_0.2s] focus:outline-[none] focus:border-b-[solid_#def2f1_2px] focus:scale-105 px-[10px] py-[5px] w-[280px] h-[40px] bg-[#3aafa9] border-[none] rounded-[5px] uppercase text-[white] font-medium text-[15px] uppercase"
          />
          <img
            src={Refresh}
            alt="logo"
            className="h-[45px] ml-[30px] cursor-pointer hover:scale-110 hover:[transition:all_ease-in-out_0.2s]"
            onClick={refreshPage}
          />
        </div>
      </div>
      {error ? (
        <div className="coinConatainer flex flex-col">
          {isLoading && (
            <h1 className="loadingMsg text-[white]">Data Loading....</h1>
          )}
          {filterCoins.map((coins) => {
            return (
              <Coin
                id={coins.id}
                icon={coins.image}
                coinName={coins.name}
                coinSymbol={coins.symbol}
                price={coins.current_price}
                marketCap={coins.market_cap}
                priceChange={coins.price_change_percentage_24h}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-[white] ">
          There is an error while loading the App , Sorry for the inconvinence
        </p>
      )}
    </div>
  );
}

export default Home;
