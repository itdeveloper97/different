import React, { useCallback, useMemo, useReducer } from "react";
import styled from "styled-components";

interface IProps {
  select?: {
    isOpen?: boolean;
  };
}

const openAction = () => ({ type: "OPEN" });
const closeAction = () => ({ type: "CLOSE" });

interface IMultiselectState {
  isOpen: boolean;
}

export function multiselectStore(state: IMultiselectState, action: any) {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const multiselectInitialState = {
  isOpen: false,
};

export const MultiselectContext = React.createContext<{
  state: IMultiselectState;
  dispatch: any;
}>({ state: multiselectInitialState, dispatch: {} });

let render = 0;

export const Multiselect = ({ select }: IProps) => {
  render++;
  const [state, dispatch] = useReducer(
    multiselectStore,
    multiselectInitialState
  );

  const _state = useMemo(() => ({ ...state }), [state]);
  const _dispatch = useMemo(() => dispatch, [dispatch]);

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

  const handleOpen = useCallback(() => dispatch(openAction()), [dispatch]);
  const handleClose = useCallback(() => dispatch(closeAction()), [dispatch]);
  return (
    <MultiselectContext.Provider value={{ state: _state, dispatch: _dispatch }}>
      <Container>
        <button onClick={handleOpen}>open</button>
        <button onClick={handleClose}>close</button>
        {/*<div>{String(state.isOpen)}</div>*/}
        <div>render: {render}</div>
        {/*<Select {...select}>{options}</Select>*/}
      </Container>
    </MultiselectContext.Provider>
  );
};

const Options = styled.div``;
const Option = styled.div``;

const Container = styled.div``;
