import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts"

export async function action({params}){
    await deleteContact(params.contactId).then((val)=>{console.log("delete",val,params.contactId);});    
    return redirect("/");
}