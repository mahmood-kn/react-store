import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import { getProducts } from '../../api/reqs';

// interface Props {}

const Home = () => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
