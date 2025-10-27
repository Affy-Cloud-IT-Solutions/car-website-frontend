import React, { useState } from "react";

import { Search } from "lucide-react";
import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="w-full  flex items-center px-8 h-16">
      <div className="relative w-full h-full">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className={"h-full"}
          placeholder="Search for a vehicle..."
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="ml-4 flex items-center justify-between gap-4">
        <Button>Search</Button>
        <Button>Clear</Button>
      </div>
    </div>
  );
};

export default SearchBar;
