export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    // reduce function maps the basket 
    // fancier for loop increments the value and returns it
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
        return{
            ...state,
            basket:[...state.basket,action.item],
        };
        // case 'REMOVE_FROM_BASKET':
        //   return{
        //       ...state,
        //       basket:state.basket.filter(item=>item.id!==action.id)
        //        we need to get rid of the index of the item to  be removed and not the id
        // this will remove all the similar items altogether even if we want to remove just one of them (all items of
        //       same id will be removed)
        //   };
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
    
          if (index >= 0) { //basket has item
            newBasket.splice(index, 1); //decreasing the items in the basket by one
             
          } else {
            console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
          }
          return {
            ...state,
            basket: newBasket //new basket refers to as now the item has been removed
          }
        
        case "SET_USER":
          return {
            ...state,
            user: action.user //user which we dispatched
          }
         
           default:
        return state;
    }
  };
  export default reducer;
   
//   reducer throws the data(dispatcgh action)into the data layer in this app helps to add items in basket(cart)