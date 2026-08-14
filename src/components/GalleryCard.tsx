// Defines the TypeScript properties required by the GalleryCard component
interface GalleryCardProps {
  image: string;
  title: string;
}

export default function GalleryCard({
  image,
  title,
}: GalleryCardProps) {
  return (
    // Main gallery card container
    <div
      className="
        rounded-xl
        overflow-hidden
        bg-white
        dark:bg-gray-800
        border
        border-gray-200
        dark:border-gray-700
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
      "
    >
      {/* Image container */}
      <div className="overflow-hidden">
        {/* Displays the gallery image */}
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            hover:scale-110
          "
        />
      </div>

      {/* Displays the photography category or image title */}
      <h3 className="p-4 text-xl font-semibold text-center text-black dark:text-white">
        {title}
      </h3>
    </div>
  );
}