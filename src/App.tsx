import React from "react";
import styled from "styled-components";
import { MenuMicroInteraction } from "./components/MenuMicroInteraction";

export function App() {
  return (
    <Container>
      <MenuMicroInteraction />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
