import { Auth } from "../Component/Auth";
import { Quote } from "../Component/Quote";

export function Signup() {
    return <>
    <div className="grid grid-cols-2 overflow-y-auto">
        <div className="col-span-2 md:col-span-1">

        <Auth authtype="signup"></Auth>
        </div>
     <div className="hidden md:block overflow-auto">  
        <Quote></Quote>
        </div>
    </div>
    </>
}


