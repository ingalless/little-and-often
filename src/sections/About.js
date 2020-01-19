import React from "react"
import Section from "../components/section"
import sheep from "../../content/assets/sheep.jpg"
import water from "../../content/assets/across-the-water.jpg"
import styled from "@emotion/styled"

const Photo = styled.img`
  max-height: 80vh;
  width: auto;
  margin: 0;
`

export default function About() {
  return (
    <>
      <Section>
        <p>
          I'm a Web Developer in the United Kingdom. I'm always looking to
          deliver high quality code along with tests. I'm passionate about
          writing code that any developer can understand, and believe my code
          should be good enough that I could be put out the job!
        </p>
        <p>
          Currently I'm improving my teaching and{" "}
          <a href="https://www.swyx.io/writing/learn-in-public/">
            my ability to learn in public.
          </a>
        </p>
      </Section>
      <Section title="Outside work">
        <p>
          Outside of work I enjoy ice skating, photography and walking; just to
          name a few things. You can see some highlight photos below. They're
          nothing more than some simple snaps on my phone.
        </p>
      </Section>

      <Section title="Lonely Sheep">
        <Photo src={sheep} alt="Sheep stood on a mountain" />
      </Section>

      <Section title="Across the Water">
        <Photo src={water} alt="Photo of mountain range across a lake" />
      </Section>
    </>
  )
}
