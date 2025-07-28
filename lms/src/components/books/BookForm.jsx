import { useState } from 'react';

const BookForm = ({ book, onSubmit }) => {
  const [formData, setFormData] = useState(
    book || {
      title: '',
      author: '',
      isbn: '',
      category: '',
      publisher: '',
      edition: '',
      description: '',
      copies: 1,
      imageUrl: '',
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="History">History</option>
          <option value="Biography">Biography</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="publisher">Publisher</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="edition">Edition</label>
        <input
          type="text"
          id="edition"
          name="edition"
          value={formData.edition}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="copies">Number of Copies</label>
        <input
          type="number"
          id="copies"
          name="copies"
          min="1"
          value={formData.copies}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Book Cover Image URL</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-primary">
        {book ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
