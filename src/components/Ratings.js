import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Ratings = ({ defaultValue = 0, onChange }) => {
    const [value, setValue] = useState(defaultValue);
    const [hover, setHover] = useState(null);

    const onClick = (newValue) => {
        setValue(newValue);
        onChange(newValue);
    };

    const onMouseEnter = (newValue) => {
        setHover(newValue);
    };
    
    const onMouseLeave = () => {
        setHover(null);
    };

    return (
        <>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <Box as='button' onClick={() => onClick(ratingValue)} onMouseEnter={() => onMouseEnter(ratingValue)} onMouseLeave={onMouseLeave}>
                        { hover !== null && ratingValue <= hover ?
                            <FaStar color='crimson' />
                        : ratingValue <= value ?
                            <FaStar color='crimson' /> :
                            <FaRegStar color='crimson' />
                        }
                    </Box>
                );
            })}
        </>
    );
}

export default Ratings;
