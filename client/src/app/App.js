import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Nav/Navbar.jsx';

function App({children}) {
    return (
      <div className="w-full h-auto">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    );
}

export default App;