import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
      padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 5px
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Span = styled.span`
    font-size: 50px;
    font-weight: bold;
    margin-left: 4px;

    @media (max-width: 768px) {
        font-size: 25px;
        margin-bottom: 10px
    }
`;

const LapelPlan = styled.span`
    border: 2px solid crimson;
    color: crimson;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
    margin: 15px 0 20px;
    text-transform: capitalize;

    @media (max-width: 768px) {
        display: none;
    }
`;


const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    margin-bottom: 30px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const Button = styled.button`
    background: darkblue;
    color: white;
    border: none;
    padding: 13px 20px;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-top: 20px
    }
`;

export default function PriceCard({price, plan}) {
    return (
        <Container>
            <PriceContainer>
                $<Span>{price}</Span>/month
            </PriceContainer>
            <LapelPlan>{plan} plan</LapelPlan>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>
            </List>
            <Button>JOIN NOW</Button>
        </Container>
    );
}
