import PropTypes from 'prop-types';


const Layout =({children})=>{
    return (
        <div className="flex flex-col items-center mt-20 mb-5">
            {children}
        </div>
    )
}

// Especifica los tipos de las props que el componente acepta
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout