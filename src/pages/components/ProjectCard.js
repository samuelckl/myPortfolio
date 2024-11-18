export default function ProjectCard({ title, videoLink, description }) {
  // Convert the videoLink into an embed link if necessary
  const embedLink = videoLink.includes("watch")
    ? videoLink.replace("watch?v=", "embed/")
    : videoLink;
  const descriptionItems = description
    .split("--")
    .filter((item) => item.trim() !== "");

  return (
    <div className="flex flex-col sm:flex-row items-leading bg-white shadow-md w-4/5 m-4 p-4 rounded-lg font-sans">
      {/* Video Section */}
      <div className="w-full sm:w-2/3 flex flex-col sm:items-start pl-0 sm:pl-6">
        {embedLink && embedLink !== "none" ? (
          <iframe
            src={embedLink}
            title={title}
            className="w-full aspect-video rounded-lg"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="text-gray-500 text-center w-full h-full flex items-center justify-center rounded-lg border border-dashed border-gray-300">
            To be uploaded
          </div>
        )}
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
    </div>
  );
}
