import React from 'react'

export default function Button({buttonText}) {
    return (
        <button className={`bg-white hover:bg-plat text-night font-2xl py-4 px-4 font-mont font-semibold rounded`}>
            {buttonText}
        </button>
    )
}