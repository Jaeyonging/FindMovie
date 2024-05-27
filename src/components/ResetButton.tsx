import React from 'react';

interface Props {
    onClick: () => void;
}

export const ResetButton = ({ onClick }: Props) => {
    return (
        <button className='resetButton' onClick={onClick}>다시 검색하기</button>
    );
};
