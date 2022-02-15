import React from 'react';

import Phone from '../../img/man3.png';
import AnimatedShapes from '../AnimatedShapes';

import {Container, Left, Image, Right, Title, Span, Desc, Button} from './FeaturesStyle';



export default function Features() {
  return (
    <Container >
        <Left>
            <Image src={Phone} />
        </Left>
        <Right>
            <Title>
                <b>good</b> design
                <br />
                <b>good</b> business
            </Title>
            <Span>We know that good design means good business.</Span>
            <Desc>
                We help our clients succeed by creating brand identities, digital
                experiences, and print materials that communicate clearly, achieve
                marketing goals, and look fantastic.
            </Desc>
            <Desc>
                We care your business and guarantee you to achieve marketing goals.
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  );
}
