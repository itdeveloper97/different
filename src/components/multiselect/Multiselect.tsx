import React, { useMemo } from "react";
import styled from "styled-components";
import { Select } from "./Select";

export const Multiselect = () => {
  const options = useMemo(
    () => (
      <Options>
        <Option>1</Option>
        <Option>1</Option>
        <Option>1</Option>
      </Options>
    ),
    []
  );
  return (
    <Container>
      <select name="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <Select>{options}</Select>
    </Container>
  );
};

const Options = styled.div``;
const Option = styled.div``;

const Container = styled.div``;
