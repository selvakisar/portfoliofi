import { SkillsCard } from "./components/Card";
import { IntroApp, Logo } from "./components/Constants";
import Topbar from "./components/Topbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Skill } from "./pages/Skill";
import './App.css'
import Contact from "./pages/Contact";
function App() {
  return (
    <div className=""style={{backgroundImage:"url(https://i.pinimg.com/564x/99/89/ec/9989ec9e98149fdee91b318e5793f77b.jpg)"}  }  >
  <div className="mx-3 grid  grid-col justify-center items-center">
      <div className=" ">
        <div>
          <Topbar />
        </div>
        <div>
          <IntroApp />
        </div>
        <div className=" ">
          <Logo />
        </div>
      </div>
      <div className="divider"></div>

      <div className="  px-2 py-2  rounded-3xl">
        <About />
      </div>

      <div className="  px-2 py-2  rounded-3xl">
        <Skill />
      </div>

      <div className="divider"></div>

      <div className="  px-2 py-2  rounded-3xl">
        <SkillsCard />
      </div>

      <div className="divider"></div>
      

      <div className="  px-2 py-2  rounded-3xl">
        <Projects/>
      </div>
    <div className="divider"></div>
    <div className="  px-2 py-2  rounded-3xl">
        <Contact/>
      </div>
    </div>
    </div>
  );
}

export default App;
