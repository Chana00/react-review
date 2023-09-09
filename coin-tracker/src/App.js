import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>The Coins</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}: ${coin.quotes.USD.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
