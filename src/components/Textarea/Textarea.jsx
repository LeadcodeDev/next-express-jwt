import React from 'react'

const Textarea = ({ name = "", value = "", placeholder = "", label = "", rows = 3, error, onChange, required = false }) => {
    return (
        <div className={"form-group" + error ? " has-error" : ""}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} defaultValue={value} className="form-input" placeholder={placeholder} rows={rows} onChange={onChange} required={required} />
            {error && <p class="form-input-hint">{error}</p>}
        </div>
    )
}
 
export default Textarea