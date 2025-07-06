import './styles.css';
import GenreCategory from '../GenreCategory';
import type { MovieDTO } from '../../models/movie';

const movie: MovieDTO = {
    id: 31,
    name: "Meet Joe Black",
    premiered: 1998,
    rating: 7.8,
    summary: "When Death personified visits Earth in the body of a young man named Joe Black, he chooses to learn about life by staying with a media mogul nearing the end of his days. As Joe unexpectedly falls in love with the man’s daughter, he begins to question his purpose. The film explores the mystery of existence, the power of love, and the inevitability of parting.",
    image: "https://i.pinimg.com/736x/b6/23/e4/b623e444441987e98df31d75c999d5cf.jpg",
    genres: [
        {
            id: 1,
            name: "Drama"
        },
        {
            id: 6,
            name: "Romance"
        }
    ]
}

export default function MovieCard() {

    return (
        <>
            <div className='crgm-container'>
                <div className="crgm-movie-card">
                    <img src={movie.image} alt={movie.name} />
                    <div className='crgm-movie-card-details'>
                        <h3>{movie.name}</h3>
                        <h4>Rating: <span className='span-color-green'>{movie.rating}</span></h4>
                        <h4>Premiered: <span className='span-color-premiered'>{movie.premiered}</span></h4>
                        <br />
                        <h4>Summary:</h4>
                        <p>{movie.summary}
                        </p>
                        <div className='crgm-genres-category'>
                            {
                                movie.genres.map(item => (
                                    <GenreCategory key={item.id} name={item.name} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}