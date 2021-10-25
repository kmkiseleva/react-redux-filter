import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  addCurrentServiceId,
} from "../store-toolkit/SliceServiceList";
import { changeServiceField } from "../store-toolkit/SliceServiceAdd";
import useFilter from "../hooks/useFilter";

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector((store) => store.serviceList.services);
  const filteredServices = useFilter(services);

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (id, name, price) => {
    dispatch(changeServiceField({ type: "name", value: name }));
    dispatch(changeServiceField({ type: "price", value: price.toString() }));
    dispatch(addCurrentServiceId({ id }));
  };

  return (
    <ul className="list-group w-50">
      {filteredServices.map((o) => (
        <li className="list-group-item" key={o.id}>
          {o.name} <span style={{ fontWeight: "bold" }}>{o.price}</span>
          <button
            className="btn btn-info m-2"
            onClick={() => handleEdit(o.id, o.name, o.price)}
          >
            Edit
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => handleRemove(o.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
