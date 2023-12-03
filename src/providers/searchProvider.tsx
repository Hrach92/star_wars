/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useMemo, useState } from "react";

export const SearchContext = createContext({
  text: "",
  setText: (text: string) => {},
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState<string>("");

  const value = useMemo(() => {
    return { text, setText };
  }, [text]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
export default SearchProvider;
