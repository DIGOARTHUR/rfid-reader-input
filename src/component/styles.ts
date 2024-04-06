export const css = `

.container{
    visibility: hidden;
}

.opacityBg {
position: fixed;
 opacity: 0.2;
 left: 0px;
 right: 0px;
 top: 0px;
 bottom: 0px;
 background-color: rgb(23 23 23);
}


.cardRFIDReader{
    
    color: rgba(000, 000, 000);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem/* 16px */;
    background-color: rgb(255 255 255);
    height: 10rem/* 160px */;
    width: 20rem/* 320px */;
}

.cardRFIDReader .titleCard {
	position: absolute;
    display: flex;
    padding-left: 2rem/* 32px */;
    padding-right: 2rem/* 32px */;
    align-items: center;
    gap: 3rem/* 48px */;
    border-bottom: 2px solid rgb(155 148 148);
    padding-bottom: 0.25rem/* 4px */;
    top: 15px;
   
}

.cardRFIDReader .titleCard .closeButton{
    z-index:50;
    background-color: rgb(255 255 255);
    color: rgba(000, 000, 000);
    padding: 0;
    border: 0;
}

.cardRFIDReader .bodyCard {
    display: flex;
    align-items: center;
    gap: 1.25rem/* 20px */;
    font-weight: 600;
    margin-top: 1rem/* 16px */;
}

.cardRFIDReader .inputCard {
    position: fixed;
    cursor: default;
    inset: 0px;
    opacity: 0;
    z-index: 40;
    font-weight: 600;
 
}


`;

