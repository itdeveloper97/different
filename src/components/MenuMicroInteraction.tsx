import React, { useState } from "react";
import styled, { css } from "styled-components";
import { hexToRGB } from "../core/helpers/hexToRGB";
import { Scissors, Order, Horn, Search, Unlock, Documents } from "../Icons/svg";

export const MenuMicroInteraction = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Menu>
      <Dots onClick={() => setShow(!show)} show={show}>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <Ul show={show}>
        <Li>
          <Scissors />
        </Li>
        <Li>
          <Documents />
        </Li>
        <Li>
          <Horn />
        </Li>
        <Li>
          <Order />
        </Li>
        <Li>
          <Search />
        </Li>
        <Li>
          <Unlock />
        </Li>
      </Ul>
    </Menu>
  );
};

const Li = styled.li`
  transform: scale(0.5);
  filter: blur(10px);
  transition: 0.3s;
`;

const Ul = styled.ul<{ show: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: -1;

  position: absolute;
  top: -2.5rem;
  left: -2.5rem;
  width: 10rem;
  height: 11.3rem;
  opacity: 0;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 0.3s;

  ${Li}:nth-child(odd) {
    text-align: right;
  }
  ${Li}:nth-child(even) {
    text-align: left;
  }
  ${Li}:first-child, ${Li}:last-child {
    grid-column: span 2;
    text-align: center;
  }

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
          ${Li} {
            opacity: 1;
            transform: none;
            filter: none;
          }
        `
      : css``}
`;

const Dot = styled.span`
  width: 0.45rem;
  height: 0.45rem;
  background-color: #161e3f;
  border-radius: 50%;
`;

const Dots = styled.label<{ show: boolean }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.3rem #161e3f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  transition: 0.3s;
  cursor: pointer;

  ${Dot} + ${Dot} {
    margin-top: 0.3rem;
  }

  ${({ show }) =>
    show
      ? css`
          transform: none;
          box-shadow: 0 0 0 3.4rem #161e3f;
        `
      : css`
          &:hover {
            box-shadow: 0 0 0 0.3rem #161e3f,
              0 0 0 1rem ${hexToRGB("#161e3f", 0.16)};
            color: rgba(#161e3f, 0.16);
            transform: scale(1.2) rotate(90deg);
          }
        `}
`;

const Menu = styled.nav`
  position: relative;
`;
