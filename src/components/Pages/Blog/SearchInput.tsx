const SearchInput = () => {
  return (
    <form className="w-full mt-18 mb-12">
      <header className="flex items-center justify-between mb-[.85rem]">
        <h3 className="text-lg text-subtitle">Publicações</h3>

        <span className="text-lg text-span">6 publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="w-full bg-input py-3 px-4 rounded-[.375rem] border border-solid border-border focus:outline-none focus:ring-2 focus:ring-blue text-text transition-colors placeholder:text-label"
      />
    </form>
  )
}

export default SearchInput
