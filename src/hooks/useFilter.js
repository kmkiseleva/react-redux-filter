import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFilter = (services) => {
  const [filteredServices, setFilteredServices] = useState(services);
  const fieldSearch = useSelector((store) => store.filter.filter);

  useEffect(() => {
    if (fieldSearch === "") {
      setFilteredServices([...services]);
      return;
    }

    const filteredArray = services.filter((service) => {
      const lowerCaseString = service.name.toLowerCase();
      return lowerCaseString.includes(fieldSearch);
    });

    if (!filteredArray.length) {
      setFilteredServices([...services]);
      return;
    }

    setFilteredServices([...filteredArray]);
  }, [services, fieldSearch]);

  return filteredServices;
};

export default useFilter;
