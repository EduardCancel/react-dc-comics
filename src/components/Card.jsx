export default function Card({ image, title }) {

    return (
        <div className="comic-card">
            <img src={image} alt={title} className="card-image" />
            <p className="card-title">{title.toUpperCase()}</p>
        </div>
    )
}