import styled from 'styled-components';

export const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 90vh;
    padding: 40px;

    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
    }
`;

export const Left = styled.div`
    flex: 5;
`;

export const Title = styled.h1`
    margin: 0 0 40px;
    color: #1e1e1e;
`;

export const FormContainer = styled.div`

`;

export const Form = styled.form`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftForm = styled.div`
    flex: 5;
`;

export const Input = styled.input`
    padding: 10px;
    width: 90%;
    margin-bottom: 20px;
    outline: none;

    @media (max-width: 768px) {
        width: 100%
    }
`;

export const RightForm = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Textarea = styled.textarea`
    width: 90%;
    padding: 10px;
    height: 57%;
    margin-bottom: 20px;
    border-radius: 5px;
    resize: none;
    outline: none;

    @media (max-width: 768px) {
        width: 100%
    }

`;

export const Button = styled.button`
    background: darkblue;
    color: white;
    border: none;
    padding: 13px 20px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    width: 90%;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 30px
    }
`;

export const Right = styled.div`
    flex: 5;
    margin-left: 30px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
        flex-direction: column;
        margin-bottom: 35px;
    }
`;

export const Image = styled.img`
    width: 30px;
    margin-right: 30px;
`;

export const Span = styled.span`
    margin-right: 30px;
`;
