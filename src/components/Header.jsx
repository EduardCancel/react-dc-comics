
export default function Header({ navHeader }) {
    return (
        <header className="cotainer-header">
            <div className="container">
                <img src="../public/img/dc-logo.png" alt="" />
                <nav id="menu">
                    <ul>
                        {navHeader.map((link, index) => (
                            <li key={index}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>

    )
}