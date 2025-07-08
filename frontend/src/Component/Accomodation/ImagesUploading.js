import React, { useEffect, useState } from "react";

const ImagesUploading = ({ getImages }) => {
  const [image, setImage] = useState("");
  const [imagesList, setImagesList] = useState([]);

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleFileChange = (event) => {
    let file = event.target.files[0];

    if (file) {
      // Read the file as data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileUrl = e.target.result;
        setImagesList([...imagesList, fileUrl]); // Add the image to the list
      };
      reader.readAsDataURL(file);
    }

    event.target.value = null;
  };

  const handleAddImage = () => {
    if (image) {
      setImagesList([...imagesList, image]);
      setImage("");
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImagesList = [...imagesList];
    updatedImagesList.splice(index, 1);
    setImagesList(updatedImagesList);
  };

  useEffect(() => {
    getImages(imagesList);
  }, [imagesList, getImages]);

  return (
    <div className="photos-container">
      <h4 className="photos-header">
        Photos <span className="note">*</span>
      </h4>

      <div className="image-link-container">
        <input
          className="image-link"
          type="text"
          placeholder="Add using link /.jpg"
          onChange={handleImage}
          value={image}
        />
        <button className="add-button" type="button" onClick={handleAddImage}>
          Add
        </button>
        <p className="note">(Minimum you should upload 5 images )</p>
      </div>
      <div className="image-list-container">
        {imagesList.map((imageUrl, index) => (
          <img
            key={index}
            alt={`Ige-${index}`}
            src={imageUrl}
            onClick={() => handleDeleteImage(index)}
          />
        ))}
        <label className="upload">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          ></input>
          <span className="material-symbols-outlined">upload</span>
          Upload Photo
        </label>
      </div>
    </div>
  );
};

export default ImagesUploading;
