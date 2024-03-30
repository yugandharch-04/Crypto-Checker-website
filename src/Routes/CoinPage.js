import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackgroundImg from "../img/cryptobckg.jpeg";

function CoinPage() {
  let { id } = useParams();
  const [coin, setCoin] = useState({});
  // coin start has to be null first to give time to fetch API data

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        setCoin(response.data);
      }
    );
  }, []);

  // if statement to check if data has reached, only then render the component
  if (Object.keys(coin).length!==0) {
    return (
      <div
        className="coinPage-Container flex items-center justify-center m-0 p-0 font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] h-screen w-screen"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height:"100%",
          width:"100%",
          opacity:"0.8"
        }}
      >
        <div className="coinPage-Info flex flex-col items-center justify-center w-[600px] h-screen rounded-[20px] bg-black bg-opacity-75">
          <h1 className="text-[white] text-[60px] uppercase font-bold text-[#3aafa9] bg-transparent">{coin.name}</h1>
          <img src={coin.image.large} alt="Icon" className="coinPage-Icon h-[150px] mx-0 my-[30px] bg-transparent" />
          <div className="coinPage-Data flex flex-col w-4/5 items-center mx-0 my-[5px] bg-transperent">
            <div className="coinPage-Row  flex align-center text-[white]  text-[25px] font-normal bg-transparent">
              <h3 className="coinPage-RowHeader w-[170px] text-[40px] text-[white] text-[25px] font-semibold bg-transparent">Symbol:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
            <div className="coinPage-Row  flex align-center text-[white]  text-[25px] font-normal bg-transparent">
              <h3 className="coinPage-RowHeader w-[170px] text-[40px] text-[white] text-[25px] font-semibold bg-transparent">Current Price:</h3>
              <h3 className="coinPage-RowData">
                $ {coin.market_data.current_price.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row  flex align-center text-[white]  text-[25px] font-normal bg-transparent">
              <h3 className="coinPage-RowHeader w-[170px] text-[40px] text-[white] text-[25px] font-semibold bg-transparent">Market Cap:</h3>
              <h3 className="coinPage-RowData">
                $ {coin.market_data.market_cap.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row  flex align-center text-[white]  text-[25px] font-normal bg-transparent">
              <h3 className="coinPage-RowHeader w-[170px] text-[40px] text-[white] text-[25px] font-semibold bg-transparent">Total Volume:</h3>
              <h3 className="coinPage-RowData">
                $ {coin.market_data.total_volume.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row  flex align-center text-[white]  text-[25px] font-normal bg-transparent">
              <h3 className="coinPage-RowHeader w-[170px] text-[40px] text-[white] text-[25px] font-semibold bg-transparent">24hr High:</h3>
              <h3 className="coinPage-RowData text-[#11d811]">
                $ {coin.market_data.high_24h.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row  flex align-center text-[white]  text-[25px] font-normal bg-transparent">
              <h3 className="coinPage-RowHeader w-[170px] text-[40px] text-[white] text-[25px] font-semibold bg-transparent">24hr Low:</h3>
              <h3 className="coinPage-RowData text-[#f00606]">
                $ {coin.market_data.low_24h.usd.toLocaleString()}
              </h3>
            </div>
          </div>
          <Link to="/">
            <div className=" mt-[20px] hover:scale-110 hover:[transition:all_ease-in-out_0.2s] active:no-underline coinPage-RouteButton flex items-center justify-center h-[35px] w-[100px] pl-[10px] pr-[10px] py-[2px] bg-[#3aafa9] border-[none] rounded-[5px] text-[white] font-medium text-[15px] cursor-pointer no-underline uppercase">Go back</div>
          </Link>

          
        </div>
      </div>
    );
  } else {
    return null; // if API data not fetched, return null
  }
}

export default CoinPage;
