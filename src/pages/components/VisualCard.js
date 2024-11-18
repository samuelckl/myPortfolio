import { useState } from "react";

export default function VisualCard({ title, image, description }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const descriptionItems = description.split("--").filter((item) => item.trim() !== "");

  // Toggle the preview state
  const togglePreview = () => {
    setIsPreviewOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col sm:flex-row items-leading bg-white shadow-md w-4/5 m-4 p-4 rounded-lg font-sans relative">
      {/* Image Section */}
      <div className="w-full sm:w-full flex flex-col sm:items-start pl-0 sm:pl-6">
        <div className="w-full sm:w-full flex justify-center">
        <img
          src={image}
          alt="Thumbnail of Art"
          className={`rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
            isPreviewOpen
              ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[90vw] max-h-[90vh] object-contain"
              : "h-72 w-auto"
          }`}
          onClick={togglePreview}
        />
      </div>
      </div>

      {/* Title and Description Section */}
      <div className="w-full sm:w-2/3 flex flex-col sm:items-start pl-0 sm:pl-6">
        {/* Title */}
        <div className="font-bold text-l sm:text-xl mb-2 text-gray-800 text-center sm:text-left">
          {title}
        </div>

        {/* Description */}
        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600">
          {descriptionItems.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>

      {/* Overlay for background blur when preview is open */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={togglePreview} // Close preview on clicking the background
        ></div>
      )}
    </div>
  );
}