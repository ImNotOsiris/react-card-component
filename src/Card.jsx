import profilePic from "./assets/profile.jpg";

function Card() {
    return (
        <div className="card">
            <img
                src={profilePic}
                alt="profile picture"
                className="card-image"
            />
            <h2 className="card-title">Zack</h2>
            <p className="card-text">Data Science Student and ADHD Developer</p>
        </div>
    );
}

export default Card;
