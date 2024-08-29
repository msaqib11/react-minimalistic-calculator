function InputBox({value='',onChange=()=>{},className=""}) {
    function handleOnChange(e){
        onChange(e.target.value)
    }
    return <input type='text' value={value} onChange={handleOnChange}  className={className} />
}
export default InputBox;