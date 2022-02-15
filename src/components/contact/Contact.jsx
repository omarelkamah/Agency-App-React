import React from 'react';

import Map from '../../img/map.png';
import Phone from '../../img/phone.png';
import Send from '../../img/send.png';
import { Button, Container, Form, FormContainer, Image, Input, Left, LeftForm, List, ListItem, Right, RightForm, Span, Textarea, Title, Wrapper } from './ContactStyle';


export default function Contact() {
  return (
      <Container>
          <Wrapper>
            <Left>
                <Title>Questions? <br /> Let's Get In Touch</Title>
                <FormContainer>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Your Name"/>
                            <Input placeholder="Your Email"/>
                            <Input placeholder="Your Subject"/>
                        </LeftForm>
                        <RightForm>
                            <Textarea placeholder="Your Massage"></Textarea>
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
            </Left>
            <Right>
                <List>
                    <ListItem>
                        <Image src={Map} />
                        123 Park Avenue St., New York, USA
                    </ListItem>
                    <ListItem>
                        <Image src={Phone} />
                        <Span>+20 101 604 629 8</Span> 
                        <Span>+20 112 550 229 2</Span>
                    </ListItem>
                    <ListItem>
                        <Image src={Send} />
                        <Span>omarwork010@gmail.com</Span>
                        <Span>omarwork010@gmail.com</Span>
                    </ListItem>
                </List>
            </Right>
          </Wrapper>
      </Container>
  );
}
