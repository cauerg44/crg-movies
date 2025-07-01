import './styles.css';
import githubIcon from '../../assets/github-icon-header.svg';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <nav className='crgm-navbar crgm-container'>
                <Link to={"/"}>
                    <h1>CRG Movies</h1>
                </Link>
                <a href="https://github.com/cauerg44">
                    <img src={githubIcon} alt="Github icon" />
                </a>
            </nav>
        </header>
    );
}