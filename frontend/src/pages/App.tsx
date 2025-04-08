import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blogs from '../pages/Blogs'
import MainWindow from './MainWindow';
import AppointmentPage from './AppointmentPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [section, setIsSection] = useState<"MainWindow" | "Blogs" | "Find_therapist">("MainWindow");
  if (!isLoggedIn) {
    return <WelcomePage setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar setIsSection = {setIsSection} />
      {section == "Blogs" && <Blogs />}
      {section == "MainWindow" && <MainWindow setIsSection = {setIsSection}/>}
      {section == "Find_therapist" && <AppointmentPage />}
      <Footer />
    </div>
  );
}

export default App;