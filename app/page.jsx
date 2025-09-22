import styles from "./home.module.css"
import High from "../Components/High"
import Hom from "../Components/Hom"
import Play from "../Components/Play"
import About from "../Components/About"
import DotGrid from "../Components/DotGrid"

export default function Home() {
  return (
    <div className={styles.main} style={{ position: "relative" }}>
      {/* Full-page DotGrid background */}
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#000000" 
        activeColor="#000000"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{
          position: "fixed", // fixed to cover entire viewport
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // behind all content
        }}
      />

      {/* Page Content */}
      <High />

      <section id="home">
        <Hom />
      </section>

      <section id="play">
        <Play />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  )
}
