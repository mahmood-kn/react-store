import { useEffect } from 'react';
import Home from 'pages/Home/Home';
import Shop from 'pages/Shop/Shop';
import { Route } from 'react-router-dom';
import { getProds, getCats } from 'store/mainAsync';
import { useAppDispatch } from 'store/hooks';
import Product from 'pages/Product/Product';
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProds());
    dispatch(getCats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/shop' exact>
        <Shop />
      </Route>
      <Route path='/product/:id' exact>
        <Product />
      </Route>
    </>
  );
}

export default App;
