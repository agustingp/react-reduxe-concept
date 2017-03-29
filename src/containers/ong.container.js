import { conect } from 'react-redux';
//import { addONGAction } from '../actions';
//import SinginUp from '../components';

const mapStateToProps = (state, ownProp) => {
  return {
    //ver que va acá
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    OnSignInUp: () => {
      dispatch(
        //Aca llamar la accion
        //addONGAction
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