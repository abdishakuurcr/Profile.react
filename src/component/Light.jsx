import { useState } from "react"

function Light(){

const [color, setcolor] = useState("false")
//
// Handle on button
const HandleONButton =() => {
setcolor(true)
}

const HandleOFButton =() => {
    setcolor(false)
}

return <div className="flex text-center justify-center mt-11">
 <div>
 <div style={{backgroundColor:color === true ? "yellow" : ""}} className=" w-[400px] h-[400px] border-2 border-black p-24 rounded-full mb-10 "></div>

<button style={{backgroundColor:color == true ? "red" : ""}} onClick={HandleONButton}  className= "w-[110px] text-white bg-orange-500 font-bold  rounded hover:bg-slate-50">ON</button>
<button style={{bacgroundColor: color == false ? "yellow" : ""}} onClick={HandleOFButton} className= "w-[110px] text-white  bg-orange-600 font-bold ml-4 rounded hover:bg-red-50 ">Off</button>

 </div>

</div>

}
export default Light