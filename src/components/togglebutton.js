import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Icon from "./icon.js"
import styled from 'styled-components'
import { lightForeground, foreground, transparent} from "../theme.js"

const ToggleIcon = styled(Icon)`
    fill: ${lightForeground};
    transition: all 0.1s ease-in-out;
`

const ToggleButton = styled.button`
  background: none;
  outline: none;
  border: none;
  transition: all 0.3s;
  border-radius: 1.375rem;
  margin-top: -2px;
  padding: 0.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  ${ToggleIcon} {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background: ${transparent};
    ${ToggleIcon} {
      fill: ${foreground};
    }
  }
  @media (max-width: 768px) {
    margin-right: .3rem;
    ${ToggleIcon} {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {theme => (
        <ToggleButton
          title="Toggle Mode"
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'light' }
                : { ...theme, mode: 'dark' }
            )
          }
        >
        {theme.mode === 'light' ? <ToggleIcon name="moon"/> : <ToggleIcon name="sun"/>}
        </ToggleButton>
      )}
    </ThemeConsumer>
  );
}
