import './styles.css';
import { Link } from "react-router-dom";
import Button from "../Button";
import InversedButton from "../InversedButton";

export default function MovieDetailsButtons() {

    return (
        <div className="crgm-container crgm-movie-details-buttons">
            <Link to={"/collection"}>
                <Button name="Back to collection" />
            </Link>
            <Link to={"/"}>
                <InversedButton name="Home" />
            </Link>
        </div>
    );
}