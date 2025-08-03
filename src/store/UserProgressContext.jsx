import { createContext, useState } from "react";


const UserProgressContext = createContext({
    progress: "",
    showProductDeltail: (id)=>{} ,
    hideProductDeltail: ()=>{},
    showCart: ()=>{} ,
    hideCart: ()=>{} ,
    showCheckout: ()=>{} ,
    hideCheckout: ()=>{} ,
})


export function UserProgressContextProvider({children}){

    const [userProgress, setUserProgress] = useState();
    const [itemId, setItemId] = useState(0);

    function showProductDeltail(id){
        setUserProgress("item-description")
        setItemId(id)
    }
    function hideProductDeltail(){
        setUserProgress("")
        setItemId(0)
    }
    function showCart(){
        setUserProgress("cart")
        
    }
    function hideCart(){
        setUserProgress("")
    }
    function showCheckout(){
        setUserProgress("checkout")
    }
    function hideCheckout(){
        setUserProgress("")
    }
    const value = {
        progress: userProgress,
        itemId,
        showProductDeltail,
        hideProductDeltail,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return(
        <UserProgressContext.Provider value={value}>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressContext;