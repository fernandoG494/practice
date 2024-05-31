import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../store/slices/PageSlice";

const ErrorPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Error page :(</h1>
      <hr />

      <Link to="/" onClick={() => dispatch(setPage("/"))}>
        Vuelve al dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;
