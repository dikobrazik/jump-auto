import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react"
import './Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Button = <As extends 'link' | 'button',>({as, children, ...props}: {as?: As} & PropsWithChildren<As extends 'link' ? LinkProps : ButtonProps>) => {
  return as === 'link' ? <a {...props} className="button">{children}</a> : <button className="button" {...props}>{children}</button>
}