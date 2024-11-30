

import { useState } from "react";
import PropTypes from "prop-types";

const Editcompanionprofile = () => {
  const [formData, setFormData] = useState({
    username: "hello",
    gender: "male",
    skinTone: "dark",
    bodyType: "skinny",
    age: "25",
    location: "new delhi",
    email: "kon@gmail.com",
    images: [],
    eatingHabit: "veg", 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.gender) newErrors.gender = "Please select your gender";
    if (!formData.skinTone) newErrors.skinTone = "Please select your skin tone";
    if (!formData.bodyType) newErrors.bodyType = "Please select your body type";
    if (!formData.age || formData.age < 18 || formData.age > 50) {
      newErrors.age = "Age must be between 18 and 50";
    }
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.images.length < 4) {
      newErrors.images = "Please upload at least 4 images";
    }
    if (!formData.eatingHabit) {
      newErrors.eatingHabit = "Please select your eating habit";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);

      alert('hey the profile updated successfully')
     
      setErrors({});
    }
  };

  return (
    <>
    <div className="signup-topbox">
    <div>
    <form onSubmit={handleSubmit} className="signup-form">
    <h1 className="signup-heading">Edit companion profile</h1>
    <div className="signup-subbox">
      <div>
        <label>Username</label>
        <br/>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="lginputfield"
          placeholder="username"
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label>Age</label>
        <br/>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="18"
          max="50"
          className="lginputfield"
          placeholder="age"
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      </div>
      <div className="signup-subbox">
      <div>
        <label>Gender</label>
        <br/>
        <select name="gender" value={formData.gender} onChange={handleChange} className="select-btn">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>

      <div>
        <label>Skin Tone</label>
        <br/>
        <select
          name="skinTone"
          value={formData.skinTone}
          onChange={handleChange}
          className="select-btn"
        >
          <option value="">Select Skin Tone</option>
          <option value="fair">Fair</option>
          <option value="brown">Brown</option>
          <option value="dark">Dark</option>
        </select>
        {errors.skinTone && <p className="error">{errors.skinTone}</p>}
      </div>
</div>
<div className="signup-subbox">
      <div>
        <label>Body Type</label>
        <br/>
        <select
          name="bodyType"
          value={formData.bodyType}
          onChange={handleChange}
          className="select-btn"
        >
          <option value="">Select Body Type</option>
          <option value="skinny">Skinny</option>
          <option value="muscular">Muscular</option>
          <option value="athletic">Athletic</option>
        </select>
        {errors.bodyType && <p className="error">{errors.bodyType}</p>}
      </div>

      <div>
          <label>Eating Habit</label>
          <br/>
          <select
            name="eatingHabit"
            value={formData.eatingHabit}
            onChange={handleChange}
            className="select-btn"
          >
            <option value="">Select Eating Habit</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="jain">Jain</option>
          </select>
          {errors.eatingHabit && <p className="error">{errors.eatingHabit}</p>}
        </div>

        </div>
<div className="signup-subbox">
      <div>
        <label>Location</label>
        <br/>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="mumbai"
          className="lginputfield"
        />
        {errors.location && <p className="error">{errors.location}</p>}
      </div>

      <div>
        <label>Email</label>
        <br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="lginputfield"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
</div>
      <div>
        <label>Upload Images:</label>
        <ImageUploader images={formData.images} onUpload={handleImageUpload} />
        {errors.images && <p className="error">{errors.images}</p>}
      </div>
<div className="sbt-btn">
      <button type="submit" className="create-sbt-btn">Submit</button>
      </div>
      <p className="signup-footer">edit companion profile</p>
    </form>
    </div>
    </div>
    </>
  );
};

const ImageUploader = ({ images, onUpload }) => {
  const [localImages, setLocalImages] = useState(images);
  const maxImages = 5;

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (localImages.length + files.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images.`);
      return;
    }

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
      isMain: localImages.length === 0 && files.length === 1,
    }));

    const updatedImages = [...localImages, ...newImages];
    setLocalImages(updatedImages);
    onUpload(updatedImages);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = localImages.filter((_, i) => i !== index);
    setLocalImages(updatedImages);
    onUpload(updatedImages);
  };

  const setMainImage = (index) => {
    const updatedImages = localImages.map((img, i) => ({
      ...img,
      isMain: i === index,
    }));
    setLocalImages(updatedImages);
    onUpload(updatedImages);
  };

  return (
    <div className="image-uploader">
      {localImages.map((img, index) => (
        <div key={index} className="image-container">
          <img
            src={img.url}
            alt={`Uploaded ${index + 1}`}
            className="uploaded-image"
          />
          {img.isMain ? (
            <span className="main-label">Main</span>
          ) : (
            <span className="index-label" onClick={() => setMainImage(index)}>
              {index + 1}
            </span>
          )}
          <button
            className="remove-button"
            onClick={() => handleRemoveImage(index)}
          >
            &times;
          </button>
        </div>
      ))}
      {localImages.length < maxImages && (
        <label className="add-image">
          <input
            type="file"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <span>+</span>
        </label>
      )}
    </div>
    
  );
};

// Add PropTypes validation for ImageUploader component
ImageUploader.propTypes = {
  images: PropTypes.array.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default Editcompanionprofile;





