const  imageFromBuffer = ({ data }) => {
  const getImageUrlFromBuffer = (buffer) => {
    const imageData = new Uint8Array(buffer);
    const blob = new Blob([imageData], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  };

  const imageUrl = getImageUrlFromBuffer(data);

  return imageUrl;
};

export default imageFromBuffer;