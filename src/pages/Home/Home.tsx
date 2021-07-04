import { useEffect } from 'react';
import Navbar from 'components/Navbar';
import Banner from './Banner';
import { getProds } from 'store/mainAsync';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import CategoryList from 'components/CategoryList';
import Container from '@material-ui/core/Container';
// interface Props {}

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.main.products);

  useEffect(() => {
    dispatch(getProds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <Container>
        <CategoryList />
      </Container>
    </div>
  );
};

export default Home;
