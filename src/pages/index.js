import React from "react"
import { graphql } from "gatsby"
import photo from "./../../content/assets/profile-pic.jpg"
import { scale, rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import About from "../sections/About"

const ProfilePhoto = styled.img`
  width: auto;
  height: 80vh;
  @media screen and (max-width: 800px) {
    width: 50vw;
    height: auto;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`

const TitleWrapper = styled.div`
  padding-right: 20px;
  @media screen and (max-width: 800px) {
    padding-right: 0;
  }
`

const Name = styled.h1`
  text-align: right;
  font-weight: 100;
  ${scale(2)};
  margin-bottom: 0;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin-top: 0;
  }
`

const SubTitle = styled.h2`
  text-align: right;
  font-size: ${rhythm(1)};
  font-weight: 300;
  margin-top: 0;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`

export default function(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <SEO title="Jonathan Ingall" />
        <Container>
          <TitleWrapper>
            <Name>Jonathan Ingall</Name>
            <SubTitle>Web Developer &bull; Solving problems with code</SubTitle>
          </TitleWrapper>
          <ProfilePhoto src={photo} alt="Jonathan Ingall" />
        </Container>

        <About />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
