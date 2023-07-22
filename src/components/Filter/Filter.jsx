import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { setFilter } from "../../redux/filter/slice";
import scss from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <>
      <section className={scss.section}>
      <div>
      <p className={scss.text}>Find contacts by name</p>
      <input
        className={scss.filter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
          />
        </div>
        </section>
    </>
  );
};

export default Filter;
