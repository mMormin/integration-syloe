import StatusBar from '../StatusBar';
import CoursesList from '../CoursesList';
import NavBar from '../NavBar';
import './index.scss';

function App() {
  return (
    <div className="app md:flex md:flex-col md:h-screen">
      <StatusBar />
      <NavBar />
      <CoursesList />
    </div>
  );
}

export default App;
