import './App.css';
import Text from './Components/Text/Text';
import Product from './Components/Product/Product';
import Button from "./Components/Button/Button"
import CoingekoAPI from './Components/CoingekoAPI/CoingekoAPI';
import products from './Components/Product/ProductsList';

function App() {
  const nomi = ['dsad','gfgdgfd','re4234'];
  const nuoviNomi = nomi.map( nome => {
    return <h2>{nome}</h2>
  });

  return (
    <div className='App'>
      <h2>La nostra prima card</h2>
      {/* <section className="card-section">
        <Product {...firstCard}>
          <p id='ciaone'>Ciaoneee</p>
        </Product>
        <Product {...secondCard}/>
      </section> */}
      {/* <section>{nuoviNomi}</section> */}
      {products.map((prodotto) => {
        return <Product key={prodotto.id} {...prodotto}/>
      })}
    </div>
  );
}

export default App;
