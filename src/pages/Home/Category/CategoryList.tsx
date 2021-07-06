import CategoryItem from './CategoryItem';
import Grid from '@material-ui/core/Grid';
import women from 'assets/img/women.jpg';
import man from 'assets/img/man.jpg';
import hat from 'assets/img/hat.jpg';

interface Props {}

const CategoryList = (props: Props) => {
  return (
    <Grid container spacing={3} justify='center' alignItems='center'>
      <Grid item xs={12} md={6} lg={4}>
        <CategoryItem img={women} alt='women' desc='summer 2021' />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CategoryItem img={man} alt='man' desc='summer 2021' />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CategoryItem img={hat} alt='hat' desc='new trend' />
      </Grid>
    </Grid>
  );
};

export default CategoryList;
