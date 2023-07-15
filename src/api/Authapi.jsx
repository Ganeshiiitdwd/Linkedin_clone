import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {auth}  from '../firebaseconfig'
//getAuth is respoonsible for storing you data and you can use googel sign as well in firebase authentication part

//now we will take input as argument then pass it to signInWithEmailAndPassword
export const LoginApi=(email,password)=>{
// console.log("I love myself")
try{
   const response= signInWithEmailAndPassword(auth,email, password);
   return response;
}catch  (err){
    return err;
}

}
export const Register=(email,password)=>{
    // console.log("I love myself")
    try{
       const response= createUserWithEmailAndPassword(auth,email, password);
       return response;
    }catch  (err){
        return err;
    }
    
    }
    export const Googleprovider=()=>{
        // console.log("I love myself")
        try{
           const googleresponse= new  GoogleAuthProvider();
           const res=signInWithPopup(auth ,googleresponse)
           return res;
        }catch  (err){
            return err;
        }
        
        }