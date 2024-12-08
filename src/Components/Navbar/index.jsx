import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () =>{
    const activeStyle= "underline underline-offset-4"
    const context=useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-5 text-sm font-light top-0 bg-[#FF6F61] bg-opacity-90">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    < NavLink 
                    to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/'
                    onClick={()=>context.setSearchByCategory()}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/shoes'
                    onClick={()=>context.setSearchByCategory('shoes')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/electronics'
                    onClick={()=>context.setSearchByCategory('electronics')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/clothes'
                    onClick={()=>context.setSearchByCategory('clothes')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/toys'
                    onClick={()=>context.setSearchByCategory('toys')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/others'
                    onClick={()=>context.setSearchByCategory('others')}
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    yonilhp70@gmail.com
                </li>
                <li>
                    < NavLink 
                    to='/my-orders'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/my-account'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                    to='/sign-in'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }
                    >
                        SignIn
                    </NavLink>
                </li>
                <li className="flex items-start">
                <ShoppingCartIcon className='size-6 text-black'/>
                <div>{context.cartProducts.length}</div>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
