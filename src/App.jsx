import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Research, Blog, BlogPost } from './components'

const SectionDivider = () => <hr className="section-divider" />;

const Home = () => {
  return (
    <>
      <div className="backg bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      {/* <Tech /> */}
      <Works />
      <SectionDivider />
      <Research />
      <SectionDivider />
      <Contact />
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
