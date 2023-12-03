import { Input } from "antd";
import { useCallback } from "react";

const { Search } = Input;

const SearchComponent = ({ setText }: { setText: (text: string) => void }) => {
  const onSearch = useCallback(
    (e: any) => {
      setText(e);
    },
    [setText]
  );

  return (
    <Search
      placeholder="Search ..."
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};
export default SearchComponent;
