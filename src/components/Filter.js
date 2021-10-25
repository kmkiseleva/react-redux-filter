import { useSelector, useDispatch } from "react-redux";
import { changeFilterField, clearFilterField } from "../store-toolkit/Filter";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((store) => store.filter.filter);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(changeFilterField({ type: name, value }));
  };

  const onResetHandler = () => {
    dispatch(clearFilterField());
  };

  return (
    <form className="row g-3 mb-5" onSubmit={onSubmitHandler}>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id="filter"
          name="filter"
          placeholder="Search..."
          value={filterValue}
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-auto">
        <button
          type="reset"
          className="btn btn-info mb-3"
          onClick={onResetHandler}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Filter;
