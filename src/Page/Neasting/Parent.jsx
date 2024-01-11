import Child from "./Child"
import {Outlet} from "react-router-dom"
const Parent = () => {


           return (
                      <div>Parent
                            <Outlet />  
              </div>
   )        
}
export default  Parent