import { NavMenuOptions } from './NavMenuOptions'
import { LuShoppingCart } from 'react-icons/lu'

export const NavMenu = () => {
    return (
        <nav className='navmenu'>
            <div className="nav__container">

                <h3 className='text-2xl font-semibold text-center'>
                    Next <span className='text-orange-600'>Menu</span>
                </h3>

                <NavMenuOptions />

                <div className='flex items-center justify-center'>
                    <LuShoppingCart size={20} />
                </div>


            </div>
        </nav>
    )
}
