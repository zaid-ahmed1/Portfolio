import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Research, Blog, BlogPost } from './components'

const Home = () => {
  return (
    <>
      <div className="backg bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Research />
      {/* <Blog /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={
            <>
              <Navbar />
              <BlogPost />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
