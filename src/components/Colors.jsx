import { useState } from 'react'
import '../styles/colors.css'
import { StaticHeader } from './Staticheader'

export const Colors = () => {

    const [colors, Setcolors] = useState(["Blue", "Yellow", "Red", "Green", "Violet", "Brown", "Grey", "Black"])

    return (
        <>
            <div id="colors">
                <StaticHeader />
                <p id="pickcolors">Pick colors begining from you like THE MOST TO THE LEAST </p>

                {colors.map((e) => (
                    <button id={e}>{e}</button>
                ))}
            </div>
        </>
    )

}