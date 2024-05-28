import React, { useState, FormEvent, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";

// Визначаємо тип для пропсів компонента
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[a-zA-Z\s]*$/.test(query.trim())) {
      toast("Please enter valid letters only.");
      return;
    }
    if (query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images and photos..."
          value={query}
          onChange={handleInputChange}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <GoSearch size={20} />
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
