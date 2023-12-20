function TextArea({ name, placeholder, value, handleOnChange, type }) {
    return (
            <textarea
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

export default TextArea