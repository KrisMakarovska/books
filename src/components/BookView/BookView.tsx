import { Paper } from "@mui/material";
import { BackArrow } from "../BackArrow/BackArrow";
import bookview_small from "../../images/bookview_small.jpg";

import { Link, useLocation, useNavigate } from "react-router-dom";

export const BookView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { book } = location.state;

  const handleFormSubmit = () => {
    navigate(`/books/${book.id}/edit`, { state: { book } });
  };

  return (
    <div className="container">
      <div className="form">
        <Paper className="viewbook">
          <Link to={"/books#bottom"} className="form__arrow viewbook__arrow">
            <BackArrow />
          </Link>

          <form
            className="form__inputs viewbook__inputs"
            onSubmit={handleFormSubmit}
          >
            <h2 className="viewbook__title">Book Details:</h2>
            <input
              className="form__field viewbook__field"
              name="name"
              disabled
              value={book.name}
            />

            <input
              className="form__field viewbook__field"
              type="text"
              name="author"
              disabled
              value={book.author}
            />

            <input
              className="form__field viewbook__field"
              type="number"
              name="published"
              disabled
              value={book.published}
            />
            <button className="edit-button viewbook__button" type="submit">
              Edit
            </button>
          </form>

          <img src={bookview_small} alt={book.name} className="viewbook__image" />
        </Paper>
      </div>
    </div>
  );
};
