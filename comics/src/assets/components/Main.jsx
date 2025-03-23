import ComicList from "./ComicList"

export default function Main() {
    return (
        <main>
            <section className="up">
                <div className="jumbotron"></div>
                <div>
                    <button className="series-btn">CURRENT SERIRES</button>
                </div>
                <div className="container-cards">
                    < ComicList />
                </div>
                <div>
                    <button className="btn">LOAD MORE</button>
                </div>
            </section>
            <section className="down">
                <ul>
                    <li>
                        <img className="icon" src="../public/img/buy-comics-digital-comics.png" alt="" width={35} />
                        <a href=""><span>DIGITAL COMICS</span></a>
                    </li>
                    <li>
                        <img className="icon" src="../public/img/buy-comics-merchandise.png" alt="" width={35} />
                        <a href=""><span>DC MERCHANDISE</span></a>
                    </li>
                    <li>
                        <img className="icon" src="../public/img/buy-comics-subscriptions.png" alt="" width={35} />
                        <a href=""><span>SUBSCRIPTION</span></a>
                    </li>
                    <li>
                        <img className="icon" src="../public/img/buy-comics-shop-locator.png" alt="" width={25} />
                        <a href=""><span>COMIC SHOP LOCATOR</span></a>
                    </li>
                    <li>
                        <img className="icon" src="../public/img/buy-dc-power-visa.svg" alt="" width={40} />
                        <a href=""><span>DC POWER VISA</span></a>
                    </li>
                </ul>
            </section>
        </main>
    )

}