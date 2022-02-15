import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2%;
    }
`;