import './App.css';
import AppLoader from './component/ui/appLoader';
import SideBar from './component/page/sidebar/sidebar';
import Header from './component/page/header/header';

function App() {
  return (
    <AppLoader>
      <div className="App">
        <SideBar />
        <Header />
      </div>
    </AppLoader>
  );
}

export default App;
