import Navigation from "./components/Navigation"
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import { Routes, Route } from "react-router";

import Schedule from "./components/Schedule";
import Food from "./components/Food";
import Contacts from "./components/Contacts";
// import Lazy from "./components/Lazy";
import Reminder from "./components/Reminder";
import RoutePage from "./components/RoutePage";
import Logo from "./components/Logo";
import ProtectedGallery from "./components/ProtectedGallery";
import Gallery from "./components/Gallery";
import PhotoUploader from "./components/PhotoUploader";

function App() {

  return (
    <>

      <div className="min-h-screen flex flex-col ">


        {/* Navigation */}
        <Navigation />

        {/* Main */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/food" element={<Food />} />
          {/* <Route path="/lazy" element={<Lazy />} /> */}
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<ProtectedGallery />} />
          <Route path="/uploader" element={<PhotoUploader />} />

        </Routes>

        {/* Footer */}
        <Footer />

      </div>
    </>

  )
}

export default App
