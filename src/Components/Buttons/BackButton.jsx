import './BackButton.css';

const BackButton = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <button className="backBtn" onClick={goBack}>Atrás</button>
    );
};
export default BackButton