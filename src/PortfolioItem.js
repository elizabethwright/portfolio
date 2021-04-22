function PortfolioItem(props) {
    return(
        <div className="portfolio-item" key={props.item.id} onClick={props.onClick}>
            <div className="portfolio-item-info">
                <div className="portfolio-item-title">{props.item.name}</div>
            </div>
            
            <div className="portfolio-item-image">
                <img src={props.item.image} />
            </div>
        </div>
    );
}

export default PortfolioItem;