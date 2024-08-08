

interface ImagePreviewProps {
  file: File | null;
  handleFileRemove: () => void;
  imageUrl?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ file, handleFileRemove, imageUrl }) => {
  return (
    <div className="image-preview">
      {file && (
        <div className="preview-container">
            <img src={URL.createObjectURL(file)} alt="Preview" className="preview-image" />
            <button type="button" className="remove-button" onClick={handleFileRemove}>
                &times;
            </button>
        </div>
      )}
      {!file && imageUrl && (
        <div className="preview-container">
            <img src={imageUrl} alt="Preview" className="preview-image" />
            <button type="button" className="remove-button" onClick={handleFileRemove}>
                &times;
            </button>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;