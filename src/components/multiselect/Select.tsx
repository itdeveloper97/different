import React, {
  HTMLAttributes,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { hexToRGB } from "../../core/helpers/hexToRGB";
import { useClickOutside } from "../../core/hooks/useClickOutside";
import { MultiselectContext } from "./Multiselect";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export const Select: React.FC<IProps> = memo(
  ({ isOpen = false, children, ...rest }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { state, dispatch } = useContext(MultiselectContext);
    const [open, setOpen] = useState(isOpen);
    const [search, setSearch] = useState("");

    useClickOutside(containerRef, () => setOpen(false));

    const handleClick = useCallback(() => {
      setOpen(!open);
    }, [open]);

    useEffect(() => {
      if (!inputRef.current) return;
      open ? inputRef.current.focus() : inputRef.current.blur();
    }, [open]);

    console.log("state => ", state);
    console.log("multiselect render");

    return (
      <Container {...rest} onClick={handleClick} ref={containerRef}>
        <Input
          type="text"
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconWrapper>
          <Icon icon={faChevronDown} open={open} />
        </IconWrapper>
        <ChildrenWrapper>{open && children}</ChildrenWrapper>
      </Container>
    );
  }
);

const Icon = styled(FontAwesomeIcon)<{ open: boolean }>`
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  bottom: -64px;
`;

const Input = styled.input`
  padding: 0 0 0 4px;
  pointer-events: none;
  position: absolute;
  width: inherit;
  height: inherit;
  border: none;
  font-size: 16px;

  &:focus-visible,
  &:focus {
    border: none;
    outline: none;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  right: 0;
  top: -1px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  min-width: 200px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid ${hexToRGB("#000000", 0.7)};

  ${Icon} {
    color: ${hexToRGB("#000000", 0.7)};
  }

  &:hover {
    border: 1px solid ${hexToRGB("#000000", 1)};
    ${Icon} {
      color: ${hexToRGB("#000000", 1)};
    }
  }
`;
