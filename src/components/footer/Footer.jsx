import React from 'react';
import { Container, Copy, Link, List, ListItems, Wrapper } from './FooterStyle';



export default function Footer() {
  return (
      <Container>
          <Wrapper>
              <List>
                  <ListItems>
                      <Link href="">Guide</Link>
                  </ListItems>
                  <ListItems>
                      <Link href="">Support</Link>
                  </ListItems>
                  <ListItems>
                      <Link href="">API</Link>
                  </ListItems>
                  <ListItems>
                      <Link href="">Community</Link>
                  </ListItems>
              </List>
              <Copy>Omar Ahmed Ⓒ</Copy>
          </Wrapper>
      </Container>
  );
}
