import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import BookList from "./components/books/BookList";
import BookForm from "./components/books/BookForm";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import UserDashboard from "./components/dashboard/UserDashboard";
import "./App.css";
import "./components/styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/add" element={<BookForm />} />
            <Route path="/books/edit/:id" element={<BookForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
