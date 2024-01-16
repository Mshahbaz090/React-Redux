import Home from "../components/Home";
import { Connect, connect } from "react-redux";
import { addToCart } from "../Services/Actions/action.js"

const mapStateToProps = state => ({
    addToCartHandler: data => dispatchEvent(addToCart(data))
})

export default connect(mapStateToProps, mapStateToProps)(Home)





// export default Home