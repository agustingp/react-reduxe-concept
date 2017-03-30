import { connect } from 'react-redux';
import { addONG } from '../actions';
import SinginUp from '../components/SignInUp';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  SinginUp
);