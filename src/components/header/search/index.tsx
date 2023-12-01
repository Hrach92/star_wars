import { Input } from "antd";

const { Search } = Input;

const onSearch = (e: any) => console.log(e);

const SearchComponent = () => {
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};
export default SearchComponent;
