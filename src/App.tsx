import './App.scss';
import {Footer} from '@/components/footer/footer';
import {Header} from "@/components/header/header";
import {MainContent} from "@/components/main-content/main-content";
import {FigureComponent} from "@/components/figure-component/figure-component";

function App() {
    return (
        <div className="App">
            <FigureComponent/>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
