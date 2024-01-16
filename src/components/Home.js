import React from "react";

function Home() {

    return (
        <div>
            <div className="add-to-cart">
                <img src="https://thumbs.dreamstime.com/z/add-to-cart-icon-adding-shopping-cart-well-organized-fully-editable-add-to-cart-icon-adding-shopping-cart-any-use-like-167547952.jpg" alt="" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wraper">
                <div className="img-wraper item">
                    <img src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-4g-oversea/listpage/Phone-List-Page-product-list-Aurora-427-x-600.png.thumb.webp" alt="" />

                </div>
                <div className="text-wraper item">
                    <span>I-phone</span>
                    <span>Price-$1000.00</span>



                </div>
                <div className="btn-wraper item">

                    <button>Add to Cart</button>




                </div>
            </div>




        </div>



    )
}

export default Home