import StatusBar from '../StatusBar';
import CoursesList from '../CoursesList';
import NavBar from '../NavBar';
import './index.scss';

function App() {
  return (
    <div className="app">
      <StatusBar />
      <NavBar />
      <CoursesList />
    </div>
  );
}

export default App;
