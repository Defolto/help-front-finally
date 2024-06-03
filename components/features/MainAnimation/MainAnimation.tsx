import './MainAnimation.scss'

export default function MainAnimation() {
    return (
        <div className="area">
            <ul className="circles">
                {new Array(10).fill(0).map((item, i) => (
                    <li key={i}></li>
                ))}
            </ul>
            <p></p>
        </div>
    )
}