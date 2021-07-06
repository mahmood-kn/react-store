import Navbar from 'components/Navbar';
import Banner from './Banner';

import CategoryList from './Category/CategoryList';
import Container from '@material-ui/core/Container';
import Products from './Products';
// interface Props {}

const Home = () => {
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
