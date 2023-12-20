function Submit({ text, name, value }) {
    return (
        <button
        name={name}
        id={name}
        defaultValue={value}
        >{text}</button>
    )
}

export default Submit