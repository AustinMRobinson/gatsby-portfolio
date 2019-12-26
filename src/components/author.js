import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { kindaLightForeground, foreground, lessTransparent, moreTransparent } from "../theme.js"

const BlogAuthor = styled.div`
  font-family: "Archivo";
  font-weight: 700;
  display: flex;
  align-items: center;
  color: ${kindaLightForeground};
  font-weight: 600;
  transition: 0.3s all ease-in-out;
`

const AuthorImg = styled(Img)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 12px;
  transition: 0.3s all ease-in-out;
  box-shadow: 0 0px 24px ${lessTransparent};
`

const AuthorLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    ${BlogAuthor} {
      color: ${foreground}
    }
    ${AuthorImg} {
      transform: scale(1.1);
      box-shadow: 0 4px 24px ${lessTransparent};
    }
  }
  @media (max-width: 460px) {
  padding: 12px 0;
  margin: 4px 0 12px 0;
  width: 100%;
  border-top: 1px solid ${moreTransparent};
  border-bottom: 1px solid ${moreTransparent};
}
`

const Author = (props) => {
    return (
        <AuthorLink>
            <BlogAuthor>
                <AuthorImg fixed={props.fixed} draggable="false"></AuthorImg>
                {props.name}
            </BlogAuthor>
        </AuthorLink>
    )
}

export default Author