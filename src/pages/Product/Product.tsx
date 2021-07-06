import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

interface Props {}

const Product = (props: Props) => {
  const params = useParams<{ id: string }>();
  const products = useAppSelector((state) => state.main.products);
  const product = products.filter((p) => p.id === +params?.id)[0];
  console.log(product);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Product;
