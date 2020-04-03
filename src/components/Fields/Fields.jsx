import React from 'react'

const Fields = ({ name = "", type = "text", value = "", placeholder = "", label = "", error, onChange, required = false }) => {
    return (
        <div className={"form-group" + error ? " has-error" : ""}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} defaultValue={value} className="form-input" placeholder={placeholder} onChange={onChange} required={required} />
            {error && <p class="form-input-hint">{error}</p>}
        </div>
    )
}
 
export default Fields