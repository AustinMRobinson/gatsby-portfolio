import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Icon from "../components/icon.js"
import { transparent } from "../theme.js"
import styled from 'styled-components'
import { lightForeground, foreground } from "../theme.js"

const ToggleIcon = styled(Icon)`
    fill: ${lightForeground};
    transition: all 0.1s ease-in-out;
`

const ToggleButton = styled.button`
  background: none;
  border: none;
  outline: none;
  transition: all 0.3s;
  border-radius: 22px;
  margin-top: -2px;
  padding: 12px;
  width: 44px;
  height: 44px;
  &:hover {
    background: ${transparent};
    ${ToggleIcon} {
      fill: ${foreground};
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
        {theme.mode === 'light' ? <ToggleIcon name="moon" width="16px" height="16px" /> : <ToggleIcon name="sun" width="16px" height="16px"/>}
        </ToggleButton>
      )}
    </ThemeConsumer>
  );
}
