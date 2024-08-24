import { useEffect, useState } from "react";
import { CountryType } from "../types";
import Item from "../components/Item";
import Filter from "../components/Filter";
import Btn from "../components/Btn";
import useGetData from "../hooks/getData";
import { itemsOnPage } from "../constants";
import SkeletsMain from "../components/SkeletsMain";
import { searchInArray } from "../utils/utils";
import NotFound from "../components/NotFound";

const MainPage = (): JSX.Element => {
  const [copyList, setCopyList] = useState<CountryType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(8);

  const { data, error, isLoading, isSuccess } = useGetData<CountryType[]>({
    key: ["countries"],
    uri: "/all",
  });

  useEffect(() => {
    if (isSuccess) {
      setCopyList(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      const searchedList = searchInArray(data, search, select);
      setCopyList(searchedList);
    }
  }, [search, select, isSuccess, data]);

  if (error) return <p>Server error.</p>;

  return (
    <div>
      <Filter search={setSearch} select={setSelect} />

      <div className="grid grid-4">
        {copyList
          .map((el, index) => (
            <Item key={el.name.common} el={el} index={index} />
          ))
          .slice(0, currentPage)}
        {isLoading && <SkeletsMain count={itemsOnPage} loading={isLoading} />}
      </div>

      {isSuccess &&
        data.length > itemsOnPage &&
        copyList.length > currentPage && (
          <div className="loadmore">
            <Btn
              btn
              name="Loadmore"
              handler={() => setCurrentPage((prev) => (prev += itemsOnPage))}
            />
          </div>
        )}

      {isSuccess && !copyList.length && <NotFound />}
    </div>
  );
};

export default MainPage;
