export default function Project({ 
  title, 
  description, 
  imageUrl, 
  video,
  githubUrl,
  mediaLink,
  mediaType
}: { 
  title: string; 
  description: string; 
  imageUrl: string; 
  video?: boolean; 
  githubUrl?: string;
  mediaLink?: string;
  mediaType?: string;
}) {
  return (
    <div className="w-full h-48 bg-[#faeaf4] border border-[#f3bcdf] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center gap-4">
      
      <div className="flex flex-col justify-between h-full flex-1">
        <div>
          <h3 className="text-sm font-bold text-gray-800 tracking-tight line-clamp-1">
            {title || "Project Title"}
          </h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {description || "No description provided yet for this project repository."}
          </p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {githubUrl ? (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                View on GitHub
              </a>
            ) : <></>}
            {mediaLink && (
            
                    <a 
                        href={mediaLink} 
                        className="hover:underline flex items-center gap-1 text-pink-300"
                        >
                            {mediaType}
                    </a>
                
            
          )}
          </p>
        </div>
      </div>
      <div className="w-28 h-full bg-[#fcd5ed]/40 border border-[#f3bcdf]/60 rounded-lg shrink-0 relative overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[10px] text-pink-400 font-semibold tracking-wide">
            No Preview
          </span>
        )}
      </div>

    </div>  
  );
}