import Typography from "typography"
import Theme from "typography-theme-st-annes"

Theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

const typography = new Typography({
  ...Theme,
  googleFonts: [
    {
      name: "Trirong",
      styles: ["100", "600"],
    },
    {
      name: "Taviraj",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Trirong"],
  bodyFontFamily: ["Taviraj"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
