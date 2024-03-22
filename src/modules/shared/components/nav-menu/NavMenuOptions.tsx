'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuLayers, LuStore } from "react-icons/lu";

export const NavMenuOptions = () => {

    const pathname = usePathname();

    return (
        <ul className="nav__menu">
            <li>
                <Link className={`nav__link ${pathname == '/products' ? 'nav__link--active' : ''}`} href='/products'>
                    <LuStore size={18}/>
                    Productos
                </Link>
            </li>

            <li>
                <Link className={`nav__link ${pathname == '/categories' ? 'nav__link--active' : ''}`} href='/categories'>
                    <span><LuLayers size={18} /></span>
                    Categorias
                </Link>
            </li>
        </ul>
    )
}
