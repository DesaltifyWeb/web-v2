import React from 'react'

export default function Button({buttonText}) {
    return (
        <button className={`bg-plat hover:bg-silver text-night font-2xl py-2 px-4`}>
            {buttonText}
        </button>
    )
}