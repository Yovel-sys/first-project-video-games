export default function SearchComp({ searchText, handleSearchText }) {
  return (
    <div className="flex justify-center my-4">
      <input
        onChange={handleSearchText}
        className="bg-gray-400 w-xl p-2 border-gray-900 rounded-xl"
        type="text"
        placeholder="Search a Game..."
        value={searchText}
      />
    </div>
  );
}
