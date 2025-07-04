import './styles.css';
import posterMovie from '../../assets/poster-movie.jpg';

export default function MovieCard() {

    return (
        <>
            <div className='crgm-container'>
                <div className="crgm-movie-card">
                    <img src={posterMovie} alt="Poster movie" />

                    <div className='crgm-movie-card-details'>
                        <h3>Meet Joe Black</h3>
                        <h4>⭐ Rating: <span className='span-color-green'>9.7</span></h4>
                        <h4>🎥 Premiered: <span className='span-color-premiered'>1998</span></h4>
                        <br />
                        <h4>Summary:</h4>
                        <p>When Death personified visits Earth in the body of a young man named Joe Black,
                            he chooses to learn about life by staying with a media mogul nearing the end of his days.
                            As Joe unexpectedly falls in love with the man’s daughter, he begins to question his purpose.
                            The film explores the mystery of existence, the power of love, and the inevitability of parting.</p>
                    </div>
                </div>
            </div>
        </>
    );
}