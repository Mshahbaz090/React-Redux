import { ADD_TO_CART } from "../Constant"


const initialState = {
    cardData: []
}



export default function cardItem(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...StaticRange,
                cardData: action.cardData
            }
            break;
        default:
            return state
    }
}