"use client"
const Notification = ({id, title, content, timestamp, read}) => {

  return (
    <div id={id} className={`w-full flex flex-col p-2 rounded-lg border my-2 items-start ${read ? 'bg-white border-slate-200' : 'bg-[#226DD3]/10 border-[#266DD3]/50'}`}>
        <h1 className={`text-md ${read ? 'text-slate-600 font-thin' : 'text-black font-extrabold'}`}>{title}</h1>
        <p className="text-left text-sm text-slate-500 pt-2 pb-1">{content}</p>
        <p className="text-xs text-slate-400">{timestamp.substring(0,10)}</p>
    </div>
  )
}

export default Notification