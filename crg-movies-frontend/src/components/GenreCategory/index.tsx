import './styles.css';

type Props = {
    name: string;
}

export default function GenreCategory({ name }: Props) {

    return (
        <div className='crgm-movie-genre-category'>
            {name}
        </div>
    );
}