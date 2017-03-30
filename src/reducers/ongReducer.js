
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
         case "SET_TIPE":
             return {
                ...state,
                tipe: action.payload
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
         case "add_ONG":
             return {
                name: action.payload.name,
                tipe: action.payload.tipe,
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