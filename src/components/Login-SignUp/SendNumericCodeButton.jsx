import { useState } from "react";

export default function SendNumericCodeButton() {
  const inputCount = 6; 
  const inputs = [];
  const [data,setData]=useState({
    value0:"",
    value1:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"",
  })
  const handleChange=(event)=>{
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }
  console.log(data)
  for (let i = 0; i < inputCount; i++) {
    inputs.push(
      <div key={i} className="w-14 h-16 flex items-center justify-center">
        <input maxLength="1" name={"value"+i} onChange={handleChange} className="w-full h-full rounded-xl bg-primary-961 text-center focus:bg-white focus:border-2 focus:border-primary-963"></input>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full my-2">
      <div className="flex justify-around w-full">
        {inputs}
      </div>
      <div className="w-full rounded-xl mt-5 bg-primary-961">
        <button type="submit" className="w-full h-full p-4 text-base text-primary-962 font-bold">Continuar</button>
      </div>
    </div>
  );
}
