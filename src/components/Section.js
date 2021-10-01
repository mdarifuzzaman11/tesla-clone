import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>

            </ItemText>
            </Fade>

            <Button>
                <Fade bottom> 
            <ButtonGroup>
                <LeftButton>
                {leftBtnText}
                </LeftButton>
                
                {rightBtnText && 
                    <RightButton>
                    { rightBtnText}
                    </RightButton>
                }
                
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
           </Button>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    
    width: 100vw;
    height: 100vh;
    background: orange;
    background-size: cover;
    background-position: center; //this will center the background image
    background-repeat: no-repeat ;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column; 
    justify-content: space-between; //vertical Alignment 
    align-items: center; //:horizontal alignment
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div `
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div `
    display: flex; //this code will make the buttons go from left to right instead of both button being on the bottom
    margin-bottom: 30px;
    @media (max-width:768px) {
        flex-direction: column;
    }

`

const LeftButton = styled.div `
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase; //very useful code to transform part of code into all uppercase
    font-size: 12px;
    cursor: pointer; //this code allows the button to have the mouse effect when you hover over a button or link it will show the curser of the mouse
    margin: 8px; //this code will keep space between the Custom Order Button and Exiting Inventory
`

//having the (LeftButton) will inherit the LeftButton's css from the top 
const RightButton = styled(LeftButton) `
background-color: white;// this code will change the color of the right button
opacity: 0.65;
color: black;

`

const DownArrow = styled.img `

    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;


`

const Button = styled.div `

`