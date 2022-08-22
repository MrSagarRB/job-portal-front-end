import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="h-screen w-full relative">
      <div className="h-[60px] fixed w-full top-0 z-50 ">
        <Header />
      </div>
      <div className=" z-40">
        <Dashboard />
      </div>
      <div className="h-[60px]  w-full bottom-0 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
