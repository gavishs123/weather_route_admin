import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='demo'>
                {children}
            </div>
            <Footer />
        </>
    )
}
PageLayout.propTypes = {
    children: PropTypes.node
}
export default PageLayout