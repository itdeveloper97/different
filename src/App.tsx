import React from "react";
import styled from "styled-components";
import { Multiselect } from "./components/multiselect/Multiselect";

export function App() {
  return (
    <Container>
      <Multiselect
        select={{
          isOpen: true,
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
