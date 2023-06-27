import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
}

const ExternalLink = ({ children, ...rest }: ExternalLinkProps) => {
  return (
    <a
      {...rest}
      className=" bg-none text-blue text-xs uppercase flex items-center gap-2 font-bold transition-all border-b border-solid border-[transparent] h-[1.1875rem] leading-5 hover:border-blue cursor-pointer"
    >
      {children}
    </a>
  )
}

export default ExternalLink
