import { useState } from "react";
import PropTypes from "prop-types";

const Createcompanion = () => {
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    skinTone: "",
    bodyType: "",
    age: "",
    location: "",
    email: "",
    images: [],
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);

      // Reset form data and errors
      setFormData({
        username: "",
        gender: "",
        skinTone: "",
        bodyType: "",
        age: "",
        location: "",
        email: "",
        images: [],
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>

      <div>
        <label>Skin Tone:</label>
        <select
          name="skinTone"
          value={formData.skinTone}
          onChange={handleChange}
        >
          <option value="">Select Skin Tone</option>
          <option value="fair">Fair</option>
          <option value="brown">Brown</option>
          <option value="dark">Dark</option>
        </select>
        {errors.skinTone && <p className="error">{errors.skinTone}</p>}
      </div>

      <div>
        <label>Body Type:</label>
        <select
          name="bodyType"
          value={formData.bodyType}
          onChange={handleChange}
        >
          <option value="">Select Body Type</option>
          <option value="skinny">Skinny</option>
          <option value="muscular">Muscular</option>
          <option value="athletic">Athletic</option>
        </select>
        {errors.bodyType && <p className="error">{errors.bodyType}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="18"
          max="50"
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        {errors.location && <p className="error">{errors.location}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Upload Images:</label>
        <ImageUploader images={formData.images} onUpload={handleImageUpload} />
        {errors.images && <p className="error">{errors.images}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
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

export default Createcompanion;
