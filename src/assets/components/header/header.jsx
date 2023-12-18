import TopHead from "./h1"
import MidHead from "./h2"
import Nav from "./nav"



export default function Header({catShow,bag}){
    return (
        <header className="w-full flex-wrap  justify-center flex font-ravi">
          <TopHead />
          <MidHead bag={bag} />
          <Nav catShow={catShow} />
        </header>
        
      )
}