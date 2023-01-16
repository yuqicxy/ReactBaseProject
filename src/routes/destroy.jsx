import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts"

export async function action({params}){
    // throw new Error("oh dang!");
    await deleteContact(params.contactId).then((val)=>{console.log("delete",val,params.contactId);});
    return redirect("/");
}