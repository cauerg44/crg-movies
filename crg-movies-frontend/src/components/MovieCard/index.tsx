import './styles.css';
import GenreCategory from '../GenreCategory';
import type { MovieDTO } from '../../models/movie';
import { Link } from 'react-router-dom';

type Props = {
    movie: MovieDTO;
}

export default function MovieCard({ movie }: Props) {

    return (
        <>
            <Link to={`/movie-details/${movie.id}`}>
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
            </Link>
        </>
    );
}