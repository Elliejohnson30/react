import React from 'react'

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language }
}) => {
    return (
       <div className="bg-white text-gray-900 rounded-lg shadow overflow-hidden">
  {/* Movie Poster */}
  <img
    src={poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : '/no-movie.png'}
    alt={title}
    className="w-full h-60 object-cover"
  />

  {/* Movie Info */}
  <div className="p-3">
    {/* Title */}
    <h3 className="text-sm font-semibold mb-2 truncate text-left">{title}</h3>

    {/* Rating, Language, Year */}
    <div className="flex items-center text-xs text-gray-600 space-x-2">
      {/* Star & Rating */}
      <div className="flex items-center space-x-1">
        <img src="star.svg" alt="Star" className="w-4 h-4" />
        <span>{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
      </div>

      <span>●</span>
      <span className="uppercase">{original_language}</span>

      <span>●</span>
      <span>{release_date ? release_date.split('-')[0] : 'N/A'}</span>
    </div>
  </div>
</div>

    )
}

export default MovieCard