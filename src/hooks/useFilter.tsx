import { useEffect, useState } from "react";
import { Specification } from "../models/Specification/Specification";

function useFilter<T>(spec: Specification<T>, list: T[]): T[] {
  const [filteredList, setFilteredList] = useState<T[]>([]);

  useEffect(() => {
    if (spec && list && list.length > 0) {
      const filtered = list.filter((item) => spec.isSatisfied(item));
      setFilteredList(filtered);
    } else {
      setFilteredList([]);
    }
  }, [list, spec]);

  return filteredList;
}

export default useFilter;
