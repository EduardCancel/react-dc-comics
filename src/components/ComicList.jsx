import Card from "./Card";
import comics from "../data/comics";

export default function ComicList({ }) {
    return (

        < section >
            <div className="container">
                <div className="cards">
                    {comics.map((element) => {
                        return (<Card key={element.id} title={element.series} image={element.thumb} />)
                    })}
                </div>
            </div>
        </section>
    )
}