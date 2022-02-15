import React from 'react';
import styled from 'styled-components';

import search from '../../img/search.png'

const Container = styled.div`
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 20px
`;

const Desc = styled.p`
    font-size: 14px;
    color: #333;
`;

export default function Card() {
  return (
      <Container>
          <Image src={search} />
          <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, cupiditate.
          </Desc>
      </Container>
  );
}
