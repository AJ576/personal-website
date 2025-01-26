import { Github, Globe } from "lucide-react";

export default function Projects({ name, content, link, demo = null }) {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-md border-black transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Name */}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>

      {/* Content */}
      <p className="text-gray-700 mb-4">{content}</p>

      <div className="flex gap-4 mt-4">
        {/* GitHub Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <span className="bg-black text-white rounded-full p-1 mr-2">
              <Github className="w-5 h-5" />
            </span>
            GitHub
          </a>
        )}

        {/* Demo Link */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-500 hover:underline"
          >
            <span className="bg-black text-white rounded-full p-1 mr-2">
              <Globe className="w-5 h-5" />
            </span>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
