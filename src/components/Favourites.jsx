import { connect } from "react-redux"
import { Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
    favourites: state.companies.favourites
})

const Favourites = ({favourites}) => ( 
    
    <Row>
        {console.log(favourites)}
        {favourites.map((fav) => 
            <Card
                className={
                    // jobSelected?.id === job.id ? 
                    // "border-thick mt-3" : 
                    "mt-3"}
                // onClick={() => changeJob(job)}
                style={{ cursor: "pointer" }}>
                <Card.Body className="d-flex">
                    <Link to={"/company-detail/" + fav.company_name}>
                        <img
                            className="book-image"
                            src={fav.logo}
                            alt="company logo" />
                    </Link>
                    <Card.Text >
                        <Link to={"/company-detail/" + fav.company_name}>{fav.company_name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        )}
    </Row>
)

export default connect(mapStateToProps)(Favourites)