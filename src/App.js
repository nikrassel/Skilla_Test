import './App.css';
// import AppLoader from './component/ui/appLoader';
import SideBar from './component/page/sidebar/sidebar';
import Header from './component/page/header/header';
import Content from './component/page/content/content';
import { useDispatch } from 'react-redux';
import { getCurrentDate } from './utils/requestDate';
import { loadCalls } from './store/calls';

function App() {
  const dispatch = useDispatch()
  const today = getCurrentDate()
  dispatch(loadCalls(today))
  return (
      <div className="App">
        <SideBar />
        <Header />
        <Content />
      </div>
  );
}

export default App;
