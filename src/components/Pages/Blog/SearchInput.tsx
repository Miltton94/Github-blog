import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>
  postLength: number
}

const SearchInput = ({ getPosts, postLength }: SearchInputProps) => {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  const handleSearchPosts = async (data: SearchFormInput) => {
    await getPosts(data.query)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchPosts)}
      className="w-full mt-18 mb-12"
    >
      <header className="flex items-center justify-between mb-[.85rem]">
        <h3 className="text-lg text-subtitle">Publicações</h3>

        <span className="text-lg text-span">{postLength} publicações</span>
      </header>

      <input
        {...register('query')}
        type="text"
        placeholder="Buscar conteúdo"
        className="w-full bg-input py-3 px-4 rounded-[.375rem] border border-solid border-border focus:outline-none focus:ring-2 focus:ring-blue text-text transition-colors placeholder:text-label"
      />
    </form>
  )
}

export default SearchInput
