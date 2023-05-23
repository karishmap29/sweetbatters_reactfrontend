import React, { createContext, useContext, useReducer } from 'react'


const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id, name: action.name, price: action.price, orderqty: action.orderqty, image: action.image
            }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "UPDATE":
            let arr = [...state]
            arr.find((dessert, index) => {
                if (dessert.id === action.id) {
                    console.log(dessert.orderqty, parseInt(action.orderqty), action.price + dessert.price);
                    arr[index] = { ...dessert, orderqty: parseInt(action.orderqty) + dessert.orderqty, price: action.price + dessert.price }
                }
                return arr
            })
            return arr
        case "DROP": let empArr = []
            return empArr

        default:
            console.log("Error in Reducer");
    }
}

export const CartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)