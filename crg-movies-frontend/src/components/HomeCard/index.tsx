import Button from '../Button';
import './styles.css';

export default function HomeCard() {

    return (
        <>
            <div className="crgm-home-card crgm-container">
                <h2 className='crgm-title-home'>
                    Welcome to our movie and animated content library!
                </h2>
                <Button name='🎬 See collection'/>
            </div>
        </>
    );
}