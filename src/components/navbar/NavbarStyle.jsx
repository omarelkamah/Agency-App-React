import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;

`;

export const Wrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

export const Logo = styled.h2`
    font-size: 35px;
    margin: 0;
    text-decoration: underline crimson;
`;

export const Menue = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
`;

export const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    border-radius: 10px;
    background: crimson;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 18px;
`;