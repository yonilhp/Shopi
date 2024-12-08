import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
    const { totalPrice, totalProducts} = props;
    return (
        <div className="flex justify-between items-center mb-3 mt-3 border border-black w-80 p-4 rounded-lg">
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>20.11.2024</span>
                    <span className='font-light'>{totalProducts} Articles</span>
                </div>
                {/* gap es para separar  de su ladp lateral */}
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon 
                            className='size-6 text-black cursor-pointer rounded-full p-1
                                        bg-gray-300 hover:bg-[#FF6F61] active:bg-[#FF6F61]'/>
                </div> 
            </div>
            
        </div>

    );
};

// Prop validation
OrdersCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    handleDelete: PropTypes.func,
    totalPrice: PropTypes.number.isRequired, // Agregar validación para totalPrice
    totalProducts: PropTypes.number.isRequired // Agregar validación para totalProducts
};

export default OrdersCard;
