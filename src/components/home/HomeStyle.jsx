import styled from 'styled-components';


export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`;

export const Left = styled.div`
    flex: 8;
    position: relative;
    left: 10%;

    @media (max-width: 768px) {
        margin: 0;
        width: 100%;
        text-align: center;
        left: 0
    }
`;


export const Title = styled.h1`
    font-size: 50px;
    width: 50%;
    margin-top: 0;

    @media (max-width: 768px) {
        margin: 0;
        font-size: 30px;
        width: 100%;
    }
`;

export const Desc = styled.p`
    width: 60%;
    line-height: 1.6;
    letter-spacing: -1px;
    font-weight: 400;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    border: navajowhite;
    padding: 12px 20px;
    font-weight: bold;
    background: blue;
    color: wheat;
    border-radius: 10px;
    letter-spacing: 2px;
    font-size: 15px;
    cursor: pointer;
    margin-right: 60px;

    @media (max-width: 768px) {
        margin-bottom: 30px;
        margin-right: 0;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    color: green;
    font-weight: 400;
    text-transform: capitalize;
`;

export const Span = styled.span`

`;


export const Right = styled.div`
    flex: 4;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100%;
    @media (max-width: 768px) {
        display: none;
    }
`