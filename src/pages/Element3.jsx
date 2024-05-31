import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../store/slices/PageSlice";

const Element3 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Element 3</h1>

      <Link to="/" onClick={() => dispatch(setPage("/"))}>
        <div>Dashboard</div>
      </Link>
    </div>
  );
};

export default Element3;
