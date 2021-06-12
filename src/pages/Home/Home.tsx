import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import { getProds } from '../../store/mainAsync';
// interface Props {}

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
