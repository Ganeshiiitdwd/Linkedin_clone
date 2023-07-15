//please check video at 2:53:45 for better understanding of data shoould be public or private
//use softauthor documentation for the better understanding of the syntax
import { toast } from "react-toastify";
import { firestore } from "../firebaseconfig";
import { addDoc,collection,onSnapshot } from "firebase/firestore";
//"userData" is refering to the name of our data 
let dbref=collection(firestore,"userData")
export const postStatus=(obj)=>{
//passing data as object as we need to pass the multiple things

addDoc(dbref,obj)
.then((res)=>{
    console.log("Documented added successfully")
    toast.success("Your post has been added successfully!")
}).catch((err)=>{
     console.log(err)
     toast.error("Sorry data wasn't added!")
})
}
//functions for reading data i.e accessing
//remember that setallstatus is argument which will take data
export const getposts=(setallstatus)=>{
     onSnapshot(dbref,(response)=>{
       setallstatus(
            response.docs.map((e)=>{
                return {...e.data(),id:e.id}
            })
        )
     })
}