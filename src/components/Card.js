import star from '../images/star.png'


export default function Card({openSpots, location, coverImg, stats, title, price}) {
    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

  
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={coverImg}
                className="card--image" 
                alt=""
            />
            <div className="card--stats">
                <img src={star} className="card--star" alt="" />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price">
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    )
}