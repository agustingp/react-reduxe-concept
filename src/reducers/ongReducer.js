
const initialState = {
name: 'Quiero Ayudar',
type: 'Asociación Civil',
phone: '0303456',
email: 'quiero@ayudar.com',
website: 'www.quieroayudar.com.ar',
description: 'Somos una ONG que quiere ayudar'
}


//if state is undefined then initialices it

const ongReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                nombre: action.payload
            };
         case "SET_TYPE":
             return {
                ...state,
                type: action.payload
            };
         case "SET_PHONE":
             return {
                ...state,
                phone: action.payload
            };
         case "SET_EMAIL":
             return {
                ...state,
                email: action.payload
            };
         case "SET_WEBSITE":
             return {
                ...state,
                website: action.payload
            };
         case "SET_DESCRIPTION":
             return {
                ...state,
                description: action.payload
            };
         case "ADD_ONG":
             return {
                name: 'agustin',
                type: action.payload.type,
                phone: action.payload.phone,
                email: action.payload.email,
                website: action.payload.website,
                description: action.payload.description

            };
          default:
                return state
    }
   
};

export default ongReducer;