import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0.3}>
        <Background/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <Mountain/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <LogoLand/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <Jungle1/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <Jungle2/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
        <Jungle3/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.15}>
        <Jungle4/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <ManOnMountin/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.05}>
        <Jungle5/>
      </ParallaxLayer>
    </Parallax>

     
    </div>
  );
}

export default App;


const Background = styled.div`
  background-image: url("/images/background.png");
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: absolute;
`

const Mountain = styled(Background)`
   background-image: url("/images/mountains.png");
`
const Jungle1 = styled(Background)`
   background-image: url("/images/jungle1.png");
`
const Jungle2 = styled(Background)`
   background-image: url("/images/jungle2.png");
`
const Jungle3 = styled(Background)`
   background-image: url("/images/jungle3.png");
`
const Jungle4 = styled(Background)`
   background-image: url("/images/jungle4.png");
`
const ManOnMountin = styled(Background)`
   background-image: url("/images/man_on_mountain.png");
`
const Jungle5 = styled(Background)`
   background-image: url("/images/jungle5.png");
`



const LogoLand = styled(Background)`
   background-image: url("/images/logo_land.png");
`

const StyledParallax = styled(Parallax)`
  display: block;
  position: relative;
  z-index: 10;
  width: 100%;
`

const StyledParallaxLayer = styled(ParallaxLayer)`

  background-image: url("/images/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  position: absolute;
  
 
`

const Mountains = styled(StyledParallaxLayer)`
  background-image: url("/images/mountains.png");

`

const Logo = styled(Mountains)`
background-image: url("/images/logo_land.png");
`

const GlobalStyles = createGlobalStyle`
  
:root {


font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
}


*{
margin: 0;
padding: 0;

}

body {
min-width: 320px;
min-height: 100vh;
background: #210002;
}






`;
