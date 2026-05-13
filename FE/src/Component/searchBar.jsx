import { useState, useEffect } from "react";
import SearchIcon from "./icon/search";
import API from "../lib/axios";
import { useNavigate } from "react-router-dom";

const SearchInput = ({
  query,
  setQuery,
  setOpen,
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        autoFocus
        placeholder="search by title"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="
          bg-zinc-900
          border
          border-zinc-700
          text-white
          px-4
          py-2
          rounded-lg
          outline-none
          w-72
        "
      />

      <button
        onClick={() => {
          setOpen(false);
          setQuery("");
        }}
        className="
          text-gray-400
          hover:text-white
        "
      >
        ✕
      </button>
    </div>
  );
};

const SearchDropdown = ({
  results,
  query,
  setOpen,
  setQuery,
}) => {
  const navigate =
    useNavigate();

  
  if (!query.trim()) {
    return null;
  }

  return (
    <div
      className="
        absolute
        top-14
        left-0
        w-full
        bg-zinc-900
        border
        border-zinc-700
        rounded-lg
        shadow-lg
        overflow-hidden
        z-50
      "
    >

      {results.length ===
        0 && (
        <div
          className="
            p-3
            text-gray-400
          "
        >
          No results found
        </div>
      )}

      {results.map((post) => (
        <div
          key={post.id}

          onClick={() => {

            navigate(
              `/post/${post.id}`
            );

            setOpen(false);

            setQuery("");
          }}

          className="
            p-3
            border-b
            border-zinc-800
            hover:bg-zinc-800
            cursor-pointer
          "
        >

          <h3
            className="
              text-white
              font-medium
            "
          >
            {post.title}
          </h3>

          <p
            className="
              text-sm
              text-gray-400
              truncate
            "
          >
            {post.message}
          </p>

        </div>
      ))}
    </div>
  );
};

const SearchBar = () => {

  const [open, setOpen] =useState(false);

  const [query, setQuery] =useState("");

  const [results,setResults] =useState([]);

  const [debouncedQuery,setDebouncedQuery] = useState("");

  useEffect(() => {

    const timer =
      setTimeout(() => {
        setDebouncedQuery(query);
      }, 500);

    return () =>
      clearTimeout(timer);

  }, [query]);

  useEffect(() => {

    if (
      !debouncedQuery.trim()
    ) {
      setResults([]);
      return;
    }

    const fetchResults =
      async () => {

        try {

          const res = await API.get(
              `/api/search?q=${debouncedQuery}`,             
            );

          setResults(res.data );

        } catch ( error) {
          console.log(error );
        }
      };

    fetchResults();

  }, [debouncedQuery]);

  const handleOpen =
    () => {
      setOpen(true);
    };

  return (
    <div className="relative">

      {!open && (
        <button
          onClick={handleOpen}
        >
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      )}

      {open && (
        <div className="relative">

          <SearchInput
            query={query}
            setQuery={setQuery}
            setOpen={setOpen}
          />

          <SearchDropdown
            results={results}  query={query} setOpen={   setOpen  } setQuery={ setQuery}  />

        </div>
      )}
    </div>
  );
};

export default SearchBar;