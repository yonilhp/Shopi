import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
    const { title, imageUrl, price, handleDelete,id } = props;
    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon= <XMarkIcon 
        className='size-6 text-black cursor-pointer rounded-full p-1 bg-gray-300 hover:bg-[#FF6F61] active:bg-[#FF6F61]'
        onClick={()=>handleDelete(id)}
    />
        
    }
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
};

// Prop validation
OrderCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    handleDelete: PropTypes.func // El handleDelete y ano es requerida
};

export default OrderCard;
