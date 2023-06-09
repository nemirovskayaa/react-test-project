import React from 'react';

const Album = ({setPopUpOpen, setAlbumID, title}) => {
    return (
        <button className='album' onClick={()=> {
            setPopUpOpen(true);
            setAlbumID(parseInt(title.userId));
        }}>{title.title}</button>
    );
}

export default Album;