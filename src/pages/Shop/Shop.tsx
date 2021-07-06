import Navbar from 'components/Navbar';
import Tags from 'components/Tags/Tags';
import ProductList from 'components/Products/ProductList';
import Container from '@material-ui/core/Container';
interface Props {}

const Shop = (props: Props) => {
  return (
    <>
      <Navbar />
      <Container>
        <Tags />
        <ProductList />
      </Container>
    </>
  );
};

export default Shop;
