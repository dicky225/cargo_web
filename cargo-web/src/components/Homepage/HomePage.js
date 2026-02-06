import '../../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CargoNewsFocus from './CargoNewsFocus';
import QuickActionsPanel from './QuickActionsPanel';
import CargoNewsGallery from './CargoNewsGallery';

function HomePage({ onNavigate }) {
    return (
        <div className="app">
            <Header onNavigate={onNavigate} />

            <main>
                <CargoNewsFocus />
                <QuickActionsPanel />
                <CargoNewsGallery />
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;
