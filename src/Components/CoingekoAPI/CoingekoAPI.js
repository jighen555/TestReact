import React from 'react';

const a = fetch('https://api.coingecko.com/api/v3/search/trending').then(response => response.json());

const CoingekoAPI = () => {
    console.log(a);
  return <div>a</div>;
};

export default CoingekoAPI;
