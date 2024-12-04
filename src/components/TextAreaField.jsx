import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const TextAreaWithFile = ({ onFilesSelected }) => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Remove duplicates
    const uniqueFiles = [
      ...files,
      ...acceptedFiles.filter((file) => !files.find((existingFile) => existingFile.name === file.name)),
    ];
    setFiles(uniqueFiles);
    onFilesSelected(uniqueFiles);
  };

  const removeFile = (fileName) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
    onFilesSelected(updatedFiles); // Pass the updated file list to parent
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: 'image/*, .pdf',
  });

  return (
    <div className="file-upload-container">
      <div {...getRootProps()} className="file-dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop files here or click to upload</p>
      </div>
      {files.length > 0 && (
        <div className="file-preview">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              {file.name}
              <button type="button" className="file-remove-btn" onClick={() => removeFile(file.name)}>
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextAreaWithFile;
