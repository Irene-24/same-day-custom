import React,{ Component } from "react";
import OrderList from "../components/OrderList/OrderList";

class Orders extends Component
{
    state =
    {
        orders:
        [
            {
                order:"#232jodjsdkn2",
                item:"#232jodjsdkn2",
                colors:"royal",
                qty:"l x 4",
                print:"DTG ",
                method:0,
                time:1582586575014,
                status:"Running 2 out of 5",
                details:
                {
                    imageUrl:"",
                    desc:"No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)"

                }
            },
            {
                order:"#232jodjsdkn2",
                item:"#232jodjsdkn2",
                colors:"royal",
                qty:"l x 4",
                print:"DTG ",
                method:1,
                time:1582586575014,
                status:"Running 2 out of 5",
                details:
                {
                    imageUrl:"",
                    desc:"No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)"

                }
            }
        ]
    };

    render()
    {
        return <OrderList list={this.state.orders} />
    }
};

export default Orders;