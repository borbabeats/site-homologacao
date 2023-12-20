function Input({ value, placeholder, name, handleOnChange, type }) {
    return ( 
        <input 
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleOnChange}
        type={type}
         />
    )
}

export default Input