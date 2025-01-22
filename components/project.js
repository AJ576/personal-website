export default function Projects({name, content, link,demo=null })
{
    return(
      <div className="border rounded-lg shadow-md p-4 max-w-md">
    
        {/* Name */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
    
        {/* Content */}
        <p className="text-gray-700 mb-4">{content}</p>
    
        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    )
}