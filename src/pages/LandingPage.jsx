import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../store/slices/PageSlice";

const LandingPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Select a link</h1>
      <hr />

      <Link to="/element-1" onClick={() => dispatch(setPage("/element-1"))}>
        <div>Elemento 1</div>
      </Link>
      <Link to="/element-2" onClick={() => dispatch(setPage("/element-2"))}>
        <div>Elemento 2</div>
      </Link>
      <Link to="/element-3" onClick={() => dispatch(setPage("/element-3"))}>
        <div>Elemento 3</div>
      </Link>

      <Outlet />
    </div>
  );
};

export default LandingPage;
