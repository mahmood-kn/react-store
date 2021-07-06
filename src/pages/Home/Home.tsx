import { useEffect } from 'react';
import Navbar from 'components/Navbar';
import Banner from './Banner';
import { getProds, getCats } from 'store/mainAsync';
import { useAppDispatch } from 'store/hooks';
import CategoryList from './Category/CategoryList';
import Container from '@material-ui/core/Container';
import Products from './Products/Products';
// interface Props {}

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProds());
    dispatch(getCats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <Container>
        <CategoryList />
        <Products />
      </Container>
    </div>
  );
};

export default Home;
