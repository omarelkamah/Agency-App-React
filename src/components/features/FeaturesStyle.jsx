import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    postition: relative;
`;

export const Left = styled.div`
    flex: 7;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 70%
`;

export const Right = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;

    @media (max-width: 768px) {
        margin: 0;
        padding: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 45px;
    font-weight: normal;
    margin-top: 0;
`;

export const Span = styled.span`
    color: #333;
    font-style: italic;
    font-weight: bold;
    letter-spacing: .5px;
`;

export const Desc = styled.p`
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 15px;
    color: #222;
`;

export const Button = styled.button`
    width: fit-content;
    margin-top: 30px;
    border: none;
    background: darkblue;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 15px;
    text-transform: uppercase;
`;