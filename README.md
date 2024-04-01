
 <!-------------------------------------------------->
<!------------------------------------ PROJECT BANNER-->
 <!-------------------------------------------------->
<h1 align="center"> < RFIDReaderInput / > </h1>

<p align="center">
  <!-------------------------------------------------->
 <!---------------------PROJECT ICON-->
  <!-------------------------------------------------->
  <img src="https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/0d2aab60-5e80-4859-8378-89b2f71e6020" alt="RFID-logo" width="150px" height="150px"/>
  <br>
   <br>
  <i>Capture your RFID reading from your React application in a practical and easy way!</i>
  <br>

</p>



 <br>
   <br>
 <!-------------------------------------------------->
 <!------------------------------------SHIELDS PROJECT-->
  <!-------------------------------------------------->
<div align="center">
    
 ![NPM Paackage](https://img.shields.io/npm/v/rfid-reader-input?color=brightgreen&label=NPM%20package&logo=NPM&logoColor=white)
 ![CodeFactor](https://img.shields.io/codefactor/grade/github/digoarthur/rfid-reader-input?color=brightgreen&label=Code%20Quality&logo=codefactor)
 ![GitHub](https://img.shields.io/github/license/digoarthur/rfid-reader-input)

</div>
  

 <div align="center">
     
<img  alt="ReactJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/11fe7e24-b5d7-47bf-814a-c8d5855e7ca8"> ![ReactJS](https://img.shields.io/badge/-ReactJS-blue)
<img  alt="ViteJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/f85aeacd-cea4-4280-9096-194da03e758e"> ![Check](https://img.shields.io/badge/-ViteJS-violet) 
<img  alt="NextJS"  width="50" height="50" src="https://github.com/DIGOARTHUR/github-automated-repos/assets/59892368/6b213e2e-213a-489d-bbda-1dec9dcda585"> ![Check](https://img.shields.io/badge/-NextJS-gray)
     
  </div>     

 <br>
  <br>

  
 <!-------------------------------------------------->
 <!------------------------------------QUICK START-->
 <!--------------------------------------------------->
## 1. Installation

```shell
    npm install rfid-reader-input
    # or
    yarn add rfid-reader-input
```

## 2. Using Component


```jsx
    import { RFIDReaderInput } from 'rfid-reader-input'

    ...

    <RFIDReaderInput
      open={isOpenRFIDReaderInput}
      onRequestClose={handleClose}
      handleCodeCardRFID={setCodecard}
     />
```

## 3. Connect RFID card reader

<div align="center">



<img  alt="skills"  width="480"  src="https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/f12b6f8c-1943-4df5-9609-159e682e08ec">

</div>


## 4. Swipe the card on the reader 

<div align="center">

 ![d20ac76d-b212-4730-955a-d6fa16efd887 (1) (1)](https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/1895e25c-a881-4148-be4e-a95bef1b5bd3)

</div>
  


 <br>
  <br>
   <br>
  <br>

<!-------------------------------------------------------------------->
<!------------------------------------SUMMARY------------------------->
<!--------------------------------------------------------------
<p align="center">
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package/tree/main#--sobre-a-aplicação">About Aplication</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/how-to-build-NPM-package#--configurando-ambiente"> Library</a>&nbsp;&nbsp;&nbsp;
</p>  

------>


 <!-------------------------------------------------->
 <!------------------------------------DESCRIPTION-->
 <!-------------------------------------------------->
# <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/148622497-164365e8-f6b0-4f40-bc75-a0ed4da6059b.png">  About Library <!---write here : talk a little about project: what's does, example.  --> 
> This library has a React component, <RFIDReaderInput/>, to facilitate data entry while reading from your RFID device.


|                             RFIDReaderInput                             |
| :-------------------------------------------------------------------: |
|   ![image](https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/97a940b0-21d2-4bb0-8fcc-79c8e98919b4) |



## Advantages

- Component already made. Install, import and use.
- Void capturing digits from the keyboard.
- Intuitive and customizable layout


  <br>
   <br>
  <br>

  <!-------------------------------------------------->
<!------------------------------------LIBRARY -->
 <!-------------------------------------------------->
 
# <img  alt="skills"  width="80" height="30" src="https://user-images.githubusercontent.com/59892368/216092858-a64d3a99-1b90-4946-b917-76eadefffb54.svg">  Library <!---write here : demonstration of the application layout.  -->

## Import

```jsx
    import { RFIDReaderInput } from 'rfid-reader-input'
```

## Component

```jsx
     <RFIDReaderInput
      open={isOpenRFIDReaderInput}
      onRequestClose={handleClose}
      handleCodeCardRFID={setCodecard}
      textTitle='RFID Identification'
      textBody='Hold your card'
     />
```

#### Props


- `open`  < boolean > : here a variable with the value of false or true is inserted to open the Input. (_mandatory_)
- `onRequestClose` < () => void > : receives a function to change the variable to the true state, closing the Input. (_mandatory_)
- `handleCodeCardRFID`  < (code: string) => void > : Here a function is inserted that will receive the value captured from the reading device. It can be a state function coming from the parent component, or from a contextAPI. (_mandatory_)
- `textTitle`: < string > : text to change the card title.  (_optional_)
- `textBody`:  < string > : text to change the card body. (_optional_)



<br>
<br>

  <!-------------------------------------------------->
<!------------------------------------CODE EXAMPLE -->
 <!-------------------------------------------------->
## Code Example

```jsx    

```
