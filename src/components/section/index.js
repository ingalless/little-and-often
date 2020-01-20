import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../../utils/typography"

const Title = styled.h4`
  color: #333;
  margin-top: 0;
  margin-bottom: 0;
  transform: rotate(-90deg);
  transform-origin: center;

  @media screen and (max-width: 800px) {
    transform: none;
    margin-bottom: ${rhythm(0.5)};
  }
`

const TitleWrapper = styled.div`
  margin: auto 0;
  text-transform: uppercase;
  letter-spacing: ${rhythm(0.05)};
  @media screen and (max-width: 800px) {
    transform: none;
  }
`

const Content = styled.div`
  width: ${rhythm(30)};
  max-width: 100%;

  p:last-child {
    margin: 0;
  }
`

const Section = ({ title = null, children, marginRhythm = 6 }) => {
  const Wrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin: ${rhythm(marginRhythm)} auto;
    max-width: 100%;

    @media screen and (max-width: 800px) {
      display: block;
    }
  `
  return (
    <Wrapper>
      {title && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Section
