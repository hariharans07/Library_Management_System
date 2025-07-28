import { useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '9780743273565',
      category: 'Fiction',
      available: true,
      imageUrl: 'https://example.com/great-gatsby.jpg',
    },
    // Add more sample books
  ]);

  const [filters, setFilters] = useState({
    search: '',
    category: '',
    availability: 'all',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      book.author.toLowerCase().includes(filters.search.toLowerCase()) ||
      book.isbn.includes(filters.search);
    
    const matchesCategory = !filters.category || book.category === filters.category;
    const matchesAvailability = filters.availability === 'all' || 
      (filters.availability === 'available' && book.available) ||
      (filters.availability === 'unavailable' && !book.available);

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  return (
    <div className="books-container">
      <div className="filters-section">
        <input
          type="text"
          name="search"
          placeholder="Search by title, author, or ISBN..."
          value={filters.search}
          onChange={handleFilterChange}
          className="search-input"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
        </select>
        <select
          name="availability"
          value={filters.availability}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All Books</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.imageUrl} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>ISBN: {book.isbn}</p>
              <p className={`availability ${book.available ? 'available' : 'unavailable'}`}>
                {book.available ? 'Available' : 'Not Available'}
              </p>
              <div className="book-actions">
                <button 
                  className={`btn ${book.available ? 'btn-primary' : 'btn-secondary'}`}
                  disabled={!book.available}
                >
                  {book.available ? 'Borrow' : 'Reserve'}
                </button>
                <button className="btn btn-info">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
