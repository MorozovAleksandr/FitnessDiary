import './App.css';
import Header from '../Header/Header';
import SideNavigation from '../SideNavigation/SideNavigation';
import ContentContainer from '../ContentContainer/ContentContainer';
import Footer from '../Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="wrapp">
                <SideNavigation />
                <ContentContainer />
            </div>
            <Footer />
        </div>
    );
}

export default App;
