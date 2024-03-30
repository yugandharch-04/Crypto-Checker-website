import React from "react";
import { useNavigate } from "react-router-dom";

const Coin = ({
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
  id,
}) => {
  let history = useNavigate();
  return (
    <div className="coinCointainer flex justify-center">
      <div className="coinRow flex flex-row justify-center align-center h-[70px]  border-b-[1px_solid_#d7d7d7] bg-transparent ">
        <div className="coinData flex text-right justify-between w-full items-center justify-center bg-transparent">
          <div className="coin flex items-center pr-[24px]">
            <img src={icon} className="h-[50px] w-[50px] mr-[10px]" alt="" />
            <h1 className="coinName text-[20px] w-[150px] text-[white] text-left ml-[30px]">{coinName}</h1>
            <p className="coinSymbol uppercase text-[20px] texxt-[white] text-left ml-[30px] mr-[20px] w-[50px]">{coinSymbol}</p>
            <p className="coinPrice text-[20px] text-[white] text-left ml-[30px] w-[110px]">$ {price.toFixed(2)}</p>
            {priceChange < 0 ? (
              <p className="priceChange w-[90px] text-[20px] text-right text-[#f00606]">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChange w-[90px] text-[20px] text-right text-[#11d811]">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coinVolume text-[20px] w-[155px] text-[white] text-left ml-[30px] whitespace-nowrap">$ {marketCap.toLocaleString()}</p>
            <button
              onClick={() => {
                history(`/CoinPage/${id}`);
              }}
              className="hover:scale-110 hover:[transition:all_ease-in-out_0.2s] ml-[20px] h-[30px] w-[100px] px-[10px] py-0 bg-[#3aafa9] border-[none] rounded-[5px] text-[white] font-medium text-[15px] cursor-pointer"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
