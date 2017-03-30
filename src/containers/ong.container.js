import { conect } from 'react-redux';
import { addONG } from '../actions';
//import SinginUp from '../components';

const mapStateToProps = (state) => {
  return {
    ong: state.ongReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnSignInUp: (ong) => {
      dispatch(
       addONG(ong)
      );
    }
  }
};

export default conect({
  mapStateToProps,
  mapDispatchToProps
})(
  //SinginUp
);