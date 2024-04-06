import { useEffect, useRef } from "react";
import React from "react";
import { css } from './styles';

type CardReaderProps = {
    isOpen: boolean
    onRequestClose: () => void;
    handleCodeCardRFID: (code: string) => void
    textTitle?: string
    textBody?: string
}


export function RFIDReaderInput({ isOpen, onRequestClose, handleCodeCardRFID, textTitle = 'Identificação RFID', textBody = 'Aproxime o cartão' }: CardReaderProps) {

    const inputRef = useRef<HTMLInputElement>(null)
    
    const autoSelectInput = () => {
        inputRef.current?.select();
    }

    useEffect(() => {

        autoSelectInput()

    }, [isOpen])

    return (
        <>
            <style>{css}</style>
            <div className={`${isOpen ? '' : 'container'}`}>
                <div onClick={() => autoSelectInput()} className='opacityBg' />
                <div className='cardRFIDReader'>

                    <div className="titleCard">
                        {textTitle} <button onClick={() => { onRequestClose() }} className="closeButton" ><img style={{height:'20px'}}  src="    https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/58e4aa2c-8278-4963-9e6a-2fdd89be851e" /></button>
                    </div>
                    <div className="bodyCard"> {textBody}<img style={{height:'34px'}}  src="https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/1dd6130e-33d9-4f56-8d98-b3a33a0c30c2" /></div>
                    <div>
                        <input
                     
                            onClick={() => autoSelectInput()} onChange={(event) => {
                                setTimeout(() => {
                                    const value = event.target.value
                                    if (value.length < 10){
                                        autoSelectInput()
                                    }else{
                                        handleCodeCardRFID(event.target.value)
                                        onRequestClose()
                                    }
                                      
                                }, 180)

                            }} type="number" ref={inputRef} className='inputCard' />

                    </div>

                </div>
            </div>
        </>




    )
}