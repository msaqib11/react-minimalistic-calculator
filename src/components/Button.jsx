export default function Button({label='',onClick= ()=>{},className=""}) {
    return <div onClick={onClick} className={className || `hover:cursor-pointer ${(label==="x" ? "bg-red-400 hover:bg-red-500 text-black " : "hover:bg-slate-500 bg-slate-400")} rounded-full h-20 w-20 flex  items-center bg-lightGrey text-dark justify-center    focus:outline-none`}>{label}</div>
}