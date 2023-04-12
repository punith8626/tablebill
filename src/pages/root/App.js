import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import Dashboard from "../../components/Dashboard/Dashboard";
import Vendors from "../../components/Vendors/Vendors";
import CreateEditVendor from "../../components/Vendors/CreateEditVendor";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <div className="container-fluid">
          <div className="row">
            <Navigation />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Header />
              <div className="pt-3 pb-2  border-top border-dark-subtle">
                <Breadcrumb />
                
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  {['/vendors/addvendor', '/vendors/addvendor/:id'].map((path, index) => 
        <Route path={path} element={<CreateEditVendor />} key={index} / >
    )}
                  
                  <Route path="/vendors" element={<Vendors />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
