import Home from "./components/Home";
import Header from "./components/Header";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css'
import Experience from "./components/Experience";
const App = () => {
  return (
    <div className=" w-full bg-white dark:bg-black ">
      <div className="fixed z-0 inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <Header></Header>

      <Home></Home>
      <Knowledge></Knowledge>
      <Projects></Projects>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
};

export default App;

