import React from 'react'

const Switch = ({ name = "", value = "", label = "", onChange, required = false }) => {
    return (
        <div class="form-group">
            <label class="form-switch">
                <input type="checkbox" name={name} defaultValue={value} onChange={onChange} required={required} />
                <i class="form-icon"></i> {label}
            </label>
        </div>
    )
}
 
export default Switch