import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }

    return (
        props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
