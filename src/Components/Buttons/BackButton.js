import './BackButton.css';

const BackButton = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <button className="backBtn" onClick={goBack}>Volver</button>
    );
};
export default BackButton