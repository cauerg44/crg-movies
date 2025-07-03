import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.css';

export default function HomeCard() {

    return (
        <>
            <div className="crgm-home-card crgm-container">
                <h2 className='crgm-title-home'>
                    Welcome to our movie and animated content library!
                </h2>
                <Link to={"/collection"}>
                    <Button name='🎬 See collection' />
                </Link>
            </div>
        </>
    );
}