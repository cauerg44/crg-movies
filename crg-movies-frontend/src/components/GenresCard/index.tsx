import './styles.css';

export default function GenresCard() {

    return (
        <>
            <h2 className='crgm-collection-title crgm-container'>
                Genres
            </h2>
            <div className="crgm-genres-card crgm-container">
                <div className='crgm-genre-item bg-drama'>
                    <h4>Drama</h4>
                </div>
                <div className='crgm-genre-item bg-horror'>
                    <h4>Horror</h4>
                </div>
                <div className='crgm-genre-item bg-adventure'>
                    <h4>Adventure</h4>
                </div>
                <div className='crgm-genre-item bg-anime'>
                    <h4>Anime</h4>
                </div>
                <div className='crgm-genre-item bg-action'>
                    <h4>Action</h4>
                </div>
                <div className='crgm-genre-item bg-romance'>
                    <h4>Romance</h4>
                </div>
                <div className='crgm-genre-item bg-sci-fic'>
                    <h4>Sci-Fiction</h4>
                </div>
                <div className='crgm-genre-item bg-comedy'>
                    <h4>Comedy</h4>
                </div>
            </div>
        </>
    );
}