function Profile({name, bio, bgColor }){
return <div className=" border-2 border-black m-3 p-3 rounded w-[350px] ">
<img src="https://img.freepik.com/free-photo/portrait-cheerful-photographer-studio_158595-505.jpg?t=st=1721652293~exp=1721655893~hmac=ef35d40233e68a6b1e90951a5a0f47c8fd61a6c0a421a46c8b667f6c76b57eaf&w=740" alt="" />
<h1 className="font-bold text-2xl my-3  ">{name}</h1>
<div className="flex gap-3">
<div className="w-[50px] h-[30px]  text-white rounded bg-gray-900">
<h1>HTML</h1>
</div>
<div className="w-[50px] h-[30px] text-white rounded bg-gray-900">
<h1>Css</h1>
</div>
<div className="w-[50px] h-[30px] text-white rounded bg-gray-900">
<h1>Reacts</h1>

</div>
</div>

<p>{bio}</p>
<button style={{backgroundColor:bgcolor}} className="bg-yellow-500  px-28 py-2 mt-10 rounded">Read more</button>
</div>
}

export default Profile