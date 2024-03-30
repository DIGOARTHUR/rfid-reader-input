import { useEffect, useRef} from "react";
import React from "react";
import { RiRfidLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { css } from './styles';

type CardReaderProps = {
    open: boolean
    setOpenCardWindow: (open: boolean) => void;
    _handleCodeCardRFID: (code: string) => void
}


export function RFIDReaderInput({ open, setOpenCardWindow, _handleCodeCardRFID }: CardReaderProps) {

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const teste = () => {
            inputRef.current?.select();
        }

        teste()

    }, [open])

    return (
        <>
            <style>{css}</style>
            <div className={`${open ? 'invisible' : ''}`}>
                <div className='opacityBg' />
                <div className='card'>

                    <div className="titleCard">
                        Identificação RFID <button onClick={() => { setOpenCardWindow(!open) }} className="z-50" ><IoCloseOutline size={25} /></button>
                    </div>
                    <div className="bodyCard"> Aproxime o cartão <RiRfidLine size={50} /></div>
                    <div>
                        <input onChange={(event) => {

                            setTimeout(() => {
                                _handleCodeCardRFID(event.target.value)
                                setOpenCardWindow(!open)
                            }, 180)

                        }} type="number" ref={inputRef} className='inputCard' />

                    </div>

                </div>
            </div>
        </>




    )
}