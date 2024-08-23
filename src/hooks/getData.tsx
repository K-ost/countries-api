import { useQuery } from "@tanstack/react-query";
import { API_URI } from "../constants";

type useGetDataProps = {
  key: string[];
  uri: string;
};

async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_URI}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

const useGetData = <T,>(props: useGetDataProps) => {
  const { key, uri } = props;
  return useQuery({
    queryKey: key,
    queryFn: () => fetchData<T>(uri),
  });
};

export default useGetData;
