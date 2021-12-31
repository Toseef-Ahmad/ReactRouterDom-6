import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
  Outlet,
  useParams,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Navigate replace to="/learn" />} />
          <Route path="learn" element={<Learn />}>
            <Route path="courses" element={<Courses />}>
              <Route path=":coursesId" element={<Courses />} />
            </Route>
            <Route path="bundles" element={<Bundles />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
    </div>
  );
};

const Learn = () => {
  return (
    <div>
      <h1>Learning Component</h1>
      <h2>befre nesting components</h2>
      <Outlet />
      <h2>after nesting component</h2>
      <div className="buttons">
        <Link to="/learn/courses">Courses</Link>
        <Link to="/learn/bundles">Bundles</Link>
      </div>
    </div>
  );
};

// Nesting
const Courses = () => {
  const arr = ['angular', 'vue', 'react'];
  const currentParam = arr[Math.floor(Math.random() * arr.length)];
  const { coursesId } = useParams();
  return (
    <div>
      <NavLink to="/learn/courses/test">Test</NavLink>
      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? 'black' : 'blue' };
        }}
        to={`/learn/courses/${currentParam}`}
      >
        {currentParam}
      </NavLink>
      <Outlet />
    </div>
  );
};

const Bundles = () => {
  return (
    <div>
      <h1>List of Bundles</h1>
      <p>App about bundles</p>
    </div>
  );
};

const CourseId = () => {
  const { coursesId } = useParams();
  return (
    <div>
      <h1>id: {coursesId}</h1>
    </div>
  );
};
