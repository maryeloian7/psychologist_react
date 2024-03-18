import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainBlock from "../mainBlock/MainBlock"
import BodyContent from "../bodyContent/BodyContent";
import WhyMe from "../whyMe/WhyMe";
import HowWork from "../howWork/HowWork";
import ComeBlock from "../comeBlock/ComeBlock";
import Cases from "../cases/Cases";
import Service from "../servicee/Service";
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";
// import Header from "../header/Header";



function App() {


  return (
    <Router>
      <div className="App">
          <div className="wrapper">
            <main className="content">
              {/* <Header/> */}
              <MainBlock/>
              <BodyContent/>
              <WhyMe/>
              <HowWork/>
              <ComeBlock/>
              <Cases/>
              <Service/>
            </main>
            <footer className="footer">
              <Footer/>
            </footer>
            <Routes>
              <Route path="/form" element={<Modal/>}/>
            </Routes>
          </div>
      </div>
    </Router>

  );

}

export default App;
