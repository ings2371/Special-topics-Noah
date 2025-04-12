const Card = ({card}) => {
    const {_id, Card_Name, Attribute, Type_of_card, LevelRankLink, Image, Types, Card_Text, Stats, Number_Own} = card
const isXyz = Type_of_card === "Xyz";
const cardStyle = isXyz ? {backgroundColor: "black", color: "white" }: {};
    return (
        <>
        <div key={card._id} className="col-md-4">
                <div className="card mb-4 box-shadow" style={cardStyle}>
                    <p>{Card_Name}</p>
                  <img 
                    className="card-img-top" 
                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                    alt="Thumbnail [100%x225]" 
                    style={{height: 225, width: '100%', display: 'block'}}
	                  src={Image}
                    data-holder-rendered="true" />
                  <div className="card-body">
                    <p className="card-text">
                        {Types.join('/')}<br/>
                        {Card_Text}
                        </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">Num Own:{Number_Own}</small>
                      <small className="text-muted">ATK/{Stats.ATK}  DEF/{Stats.DEF}</small>

                    </div>
                  </div>  
                </div>
              </div>  
        </>
    )
}

export default Card