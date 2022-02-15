import styled from 'styled-components';

export const Container = styled.div`
    min-height: 10vh;
    background: #111;
    color: lightgray;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;

    @media (max-width: 768px) {
        padding: 20px;

    }
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
`;

export const ListItems = styled.li`
    margin-right: 20px;

    @media (max-width: 768px) {
        margin-right: 10px
    }
`;

export const Link = styled.a`
    color: lightgray;
    text-decoration: none;
`;

export const Copy = styled.div`
    margin-right: 15px;
    letter-spacing: 1px;
`;