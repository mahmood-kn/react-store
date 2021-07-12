import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ProductDetail from 'pages/Product/ProductDetail';
import { setQuickModal } from 'store/main';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: '1rem',
      height: '90vh',
      position: 'relative',
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
    container: {
      display: 'flex',
    },
    image: {
      maxWidth: '50%',
    },
    close: {
      position: 'absolute',
      top: 30,
      right: 40,
      cursor: 'pointer',
    },
  })
);

export default function SimpleModal() {
  const classes = useStyles();
  const open = useAppSelector((state) => state.main.quickViewOpen);
  const product = useAppSelector((state) => state.main.quickProd);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setQuickModal(false));
  };

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <div className={classes.paper}>
        {product !== null ? (
          <>
            <ProductDetail product={product} width='80vw' />
            <CloseIcon className={classes.close} onClick={handleClose} />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Modal>
  );
}
