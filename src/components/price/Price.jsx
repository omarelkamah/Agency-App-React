import React from 'react';
import PriceCard from '../priceCard/PriceCard';
import { Container } from './PriceStyle';


export default function Price() {
  return (
      <Container className='jj'>
          <PriceCard price="20" plan="basic" />
          <PriceCard price="40" plan="primuim" />
          <PriceCard price="60" plan="advanced" />
      </Container>
  );
}
