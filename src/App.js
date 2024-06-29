import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Chart from './components/Chart';
import Calendar from './components/Calendar';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/table" element={<Table />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;