import React from 'react'

export default function Button({buttonText}) {
    return (
        <button className={`bg-white hover:bg-plat text-night font-2xl p-5 font-mont font-semibold rounded`}>
            {buttonText}
        </button>
    )
}