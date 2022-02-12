import * as React from "react"
import { RefObject, useEffect, useRef, useState } from "react"

export default function useOutsideClickDetector<T extends HTMLElement>(
    ref: RefObject<T | undefined>
) {
    const [clickedOutside, setClickedOutside] = useState(false)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            setClickedOutside(
                Boolean(
                    ref.current && !ref.current.contains(event.target as Node)
                )
            )
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])

    return clickedOutside
}
