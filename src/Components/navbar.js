import styled from "styled-components";


//Styled components
const Nav= styled.div`
    height: 70px;
    background: linear-gradient(170deg,  #13547a 0%, #80d0c7 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
`;
const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;
const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;


export default function Navbar(){
    
    return(
            <>
            <Nav>
                <Title>
                <CartImg src="https://cdn-icons-png.flaticon.com/128/7224/7224509.png" alt="cart icon" />
                
                </Title>
                <CartIconContainer>
                    <Title>Photofolio</Title>
                    
                </CartIconContainer>
            </Nav>
            </>
        
    )
}
