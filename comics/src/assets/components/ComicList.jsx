import Card from "./Card";
import comics from '../../data/comics'

export default function ComicList() {
    const card = comics.map((element) => {
        return (<Card key={element.id} title={element.series} image={element.thumb} />)
    })

    return (

        < section >
            <div className="container">
                <div className="cards">
                    {card}
                </div>
            </div>
        </section>
    )
}