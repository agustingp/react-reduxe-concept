import { connect } from 'react-redux'
import { setName } from '../actions'
import App from '../components/App'



const mapStateToProps = (state) => {
  return {
      user: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
