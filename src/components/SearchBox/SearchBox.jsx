import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <span>Find contacts by name</span>
      <input value={filterValue} type="text" onChange={handleChange} />
    </div>
  );
}
