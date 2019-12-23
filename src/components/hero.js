import styled from 'styled-components'
// import theme from '../components/layout.js'
import { withTheme } from 'styled-components'
import { foreground } from '../theme.js'


const Hero = styled.section`
    padding: 5rem 0 1rem 0;
    color: ${foreground};
    margin-bottom: 1rem;
    h1 {
        font-size: 56px;
    }
`

export default withTheme(Hero)