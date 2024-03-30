export const css= `
.opacityBg {
position: fixed;
 opacity: 0.2;
 left: 0px;
 right: 0px;
 top: 0px;
 bottom: 0px;
 background-color: rgb(23 23 23);
}


.card {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: calc(30%);
    left: calc(50%);
    border-radius: 1rem/* 16px */;
    background-color: rgb(255 255 255);
    height: 10rem/* 160px */;
    width: 20rem/* 320px */;
}

.card .titleCard {
	position: absolute;
    display: flex;
    padding-left: 2rem/* 32px */;
    padding-right: 2rem/* 32px */;
    align-items: center;
    gap: 3rem/* 48px */;
    border-color: rgb(155 148 148);
    padding-bottom: 0.25rem/* 4px */;
    top: 15px;
    border-bottom-width: 2px;
}

.card .bodyCard {
    display: flex;
    align-items: center;
    gap: 1.25rem/* 20px */;
    font-weight: 600;
    margin-top: 1rem/* 16px */;
}

.card .inputCard {
    position: fixed;
    cursor: default;
    inset: 0px;
    opacity: 0;
    z-index: 40;
    font-weight: 600;
 
}


`;

