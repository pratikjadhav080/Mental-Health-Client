import styled from "styled-components";

function Feelingnow({count}){

    const div_styles={
        position:"absolute",
        height: "300px",
        width: "300px",
        left: "56px",
        top: "262px",
        borderRadius: "27px",
        backgroundColor:"white"
    }

    const Img = styled.img`
        position:absolute;
        top:80px;
        width: 74px;
        height:74px;
        
    `;

    const Div = styled.div`
        position: absolute;
        top:20px;
        text-align: center;
        color:#37474F;
        font-size: 24px;
        font-weight: 600;
        margin: 0px 20px;
    `
    const Div2 = styled.div`
       position:absolute;
       top:180px;
       color: #656B75;
       font-size:12px;
       font-weight: 700;
    `

    return (
        <div style={count===1?div_styles:{display:"none"}} >
         <Div>How are you feeing now</Div>
         <Img src="good.jpg" style={{left:"20px"}} />
         <Img src="bad.jpg" style={{left:"180px"}}/>
         <Div2 style={{left:"40px"}}>Good</Div2>
         <Div2 style={{left:"215px"}}>Bad</Div2>
        </div>
    )
}

export {Feelingnow}