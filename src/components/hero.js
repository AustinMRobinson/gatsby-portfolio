import styled from 'styled-components'
import { foreground } from '../theme.js'

const Hero = styled.section`
    padding: 5rem 0 1rem 0;
    color: ${foreground};
    margin-bottom: 1rem;
    h1 {
        font-size: 3.5rem;
    }
    @media (max-width: 768px) {
        padding-top: 3rem;
        margin-bottom: 1rem;
        h1 {
            font-size: 2.5rem;
            margin-bottom: 0;
        }
    }
`

export default Hero