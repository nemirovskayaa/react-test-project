import React, {useEffect, useState} from 'react';


const PopUp = ({isOpen, setIsOpen, albumID}) => {
    const [photos, setPhotos] = useState([]);
  
    const getApiData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`
      ).then((response) => response.json());
      setPhotos(response);

    } catch (error) {
      console.error(error);
    }
    };

    useEffect(() => {
      getApiData();
    }, [albumID]);

  return (
    <div className={isOpen ? 'pop-up-box open' : 'pop-up-box'} onClick={() => setIsOpen(false)}>
      <div className="pop-up-content" onClick={e => e.stopPropagation()}>
        <div className='grid'>
          {photos &&
            photos.map((photo) => (
              <img className='pic' alt={photo.albumId} src={photo.thumbnailUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopUp;