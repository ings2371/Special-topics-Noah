const Card = ({card}) => {
    const {_id, Card_Name, Attribute, Type_of_card, LevelRankLink, Image, Types, Card_Text, Stats, Number_Own} = card
    //the card text and background colors
let cardStyle = {};
if(Type_of_card === "Xyz"){
  cardStyle = {backgroundColor: "black", color:"white"}
} else if (Type_of_card === "Monster"){
  cardStyle = {backgroundColor: "#7B3F00", color:"black"}
}else if (Type_of_card === "Synchro"){
  cardStyle = {backgroundColor: "white", color:"black"}
}else if (Type_of_card === "Fusion"){
  cardStyle = {backgroundColor: "purple", color:"white"}
}else if (Type_of_card === "Link"){
  cardStyle = {backgroundColor: "blue", color:"white"}
}else if (Type_of_card === "Normal"){
  cardStyle = {backgroundColor: "beige", color:"black"}
}else if (Type_of_card === "Ritual"){
  cardStyle = {backgroundColor: "#348de0", color:"white"}
}

//if a link monster display the link number instead
var extratext;
if (Type_of_card =="Link"){
  extratext = `LINK-${LevelRankLink}` ;
} else{
  extratext = `DEF/${Stats.DEF}` ;
}

var star;
if (Type_of_card === "Xyz"){
  star = "/Stars/rank.png"
} else{
  star = "/Stars/level.png"
}

//gets a cards icon
const getAttributeIcon = (Attribute) => `/Attributes/${Attribute}.png`;

    return (
        <>
        <div key={card._id} className="col-md-4">
                <div className="card mb-4 box-shadow" style={cardStyle}>
                    <p>{Card_Name} 

                    {/* Show attribute icon on the right */}
                      <img 
                        src={getAttributeIcon(Attribute)} 
                        style={{ width: '25px', height: '25px', marginLeft: '30%' }} 
                      />
                    </p>

                    {!card.Types.includes("Link") && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {Array.from({ length: card.LevelRankLink }).map((_, i) => (
                          <img
                            src={star}
                            style={{ width: '20px', height: '20px' }}
                          />
                        ))}
                      </div>
                      </div>
                    )}

                  {/* Show card image */}
                  <img 
                    style={{height: 225, width: '100%', display: 'block'}}
	                  src={Image}
                    data-holder-rendered="true" />

                  {/* card text, will shrink if over  certain amount of characters */}
                  <div className="card-body">
                    <p className="card-text"
                    style={{
                      fontSize:
                        card.Card_Text.length > 300
                          ? '12px'
                          : card.Card_Text.length > 200
                          ? '14px'
                          : '16px',
                      lineHeight: '1.4',
                    }}>
                        {Types.join('/')}<br/>
                        {Card_Text}
                        </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small>Num Own:{Number_Own}</small>
                      <small>ATK/{Stats.ATK} {extratext}</small>

                    </div>
                  </div>  
                </div>
              </div>  
        </>
    )
}

export default Card