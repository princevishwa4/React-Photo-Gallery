import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const[image, setImage] = useState(null);
    const[error, setError] = useState("");

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const handleImages = (event) => {
        let selected = event.target.files[0];

        if(selected && types.includes(selected.type)){
            setImage(selected);
            setError("");
        }else{
            setImage(null);
            setError("Please select an image file (png, jpg, jpeg)");
        }
    }

    return(
        <form>
            <label>
                <input type="file" onChange={handleImages} />
                <span>+</span>
            </label>
            <div className="showcase">
                {error && <div className="error">{ error }</div>}
                {image && <div>{ image.name }</div>}
                {image && <ProgressBar file={image} setFile={setImage} />}
            </div>
        </form>
    );
}

export default UploadForm;