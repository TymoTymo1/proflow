import './styles/App.css'
import Navbar from "./components/Navbar.tsx";
import PresentationPanel from "./components/PresentationPanel.tsx";

function App() {

    return (
        <div className={'app'}>
            <Navbar/>
            <PresentationPanel/>
        </div>
  )
}

export default App
