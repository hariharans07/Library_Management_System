import { useState } from "react";

const UserDashboard = () => {
  const [userData, setUserData] = useState({
    currentBooks: [
      {
        id: 1,
        title: "The Great Gatsby",
        issueDate: "2025-07-15",
        dueDate: "2025-07-29",
        fine: 0,
      },
      // Add more books
    ],
    reservations: [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        reservationDate: "2025-07-28",
        status: "Waiting",
      },
    ],
    fineHistory: [
      {
        id: 1,
        book: "Pride and Prejudice",
        amount: 50,
        date: "2025-07-20",
        status: "Paid",
      },
    ],
  });

  return (
    <div className="user-dashboard">
      <h2>My Dashboard</h2>

      <div className="dashboard-section">
        <h3>Currently Borrowed Books</h3>
        <div className="books-list">
          {userData.currentBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h4>{book.title}</h4>
              <p>Issue Date: {book.issueDate}</p>
              <p>Due Date: {book.dueDate}</p>
              {book.fine > 0 && (
                <p className="fine-warning">Fine: ₹{book.fine}</p>
              )}
              <button className="btn-primary">Return Book</button>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Book Reservations</h3>
        <div className="reservations-list">
          {userData.reservations.map((reservation) => (
            <div key={reservation.id} className="reservation-card">
              <h4>{reservation.title}</h4>
              <p>Reserved on: {reservation.reservationDate}</p>
              <p>Status: {reservation.status}</p>
              <button className="btn-secondary">Cancel Reservation</button>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Fine History</h3>
        <div className="fines-list">
          {userData.fineHistory.map((fine) => (
            <div key={fine.id} className="fine-card">
              <h4>{fine.book}</h4>
              <p>Amount: ₹{fine.amount}</p>
              <p>Date: {fine.date}</p>
              <p className={`status ${fine.status.toLowerCase()}`}>
                {fine.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
