//saving item

import { async } from "@firebase/util";
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

export const saveItem = async(data)=>{
    await setDoc(
        doc(firestore,'foodItems',`${Date.now()}`),data,{
            merge:true,
        });
};

// get all food items from firestore
export const getAllFoodItems = async()=>{
    const items = await getDocs(
        query(collection(firestore,"foodItems"),orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data());
}

//get all order items from firebase
export const getAllOrderItems = async()=>{
    const items = await getDocs(
        query(collection(firestore,"orderItems",orderBy("id","desc")))
    );
    return items.docs.map((doc)=>doc.data());
}