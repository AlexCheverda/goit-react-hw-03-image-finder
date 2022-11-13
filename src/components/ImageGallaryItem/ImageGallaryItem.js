import PropTypes from 'prop-types';
import { LineWave } from 'react-loader-spinner';
import { Image } from './ImageGallaryItem.Styled';

const ImageGallaryItem = ({ smImg, tags, onClick }) => {
    return (
        <li>
            <Image src={smImg} alt={tags} onClick={onClick} />
        </li>
    );
};

ImageGallaryItem.propTypes = {
    smImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGallaryItem;