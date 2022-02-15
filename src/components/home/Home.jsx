import React from 'react';
import man from '../../img/man.png';
import AnimatedShapes from '../AnimatedShapes';
import { Button, Contact, Container, Desc, Image, Info, Left, Right, Span, Title } from './HomeStyle';


export default function Home() {
  return (
      <Container>
          <Left>
              <Title>Adventures In Creative Age</Title>
              <Desc>
                  We believe that designing products and services in close partnership
                    with our clients is the only way to have a real impact on their
                    business.
              </Desc>
              <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Span>Call Us (012) 345 - 6789</Span>
                    <Span>For any question or concern</Span>
                </Contact>
              </Info>
          </Left>
          <Right>
              <Image src={man} />
              <AnimatedShapes />
          </Right>
      </Container>
  );
}
