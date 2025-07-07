import './styles.css';

type Props = {
    name: string;
}

export default function InversedButton({ name }: Props) {

    return (
        <button className='crgm-inversed-button'>
            {name}
        </button>
    );
}