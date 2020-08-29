import React, { Component } from 'react';
import Rewards from './Rewards';
import PurchaseHistory from './PurchaseHistory';
import { getpPrchaseData } from '../Utils/PurchaseUtils';

class RetailBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseHistory: []
        }
    }

    calculateTransactionPoints = (points) => {
        let totalpoints = 0;
        totalpoints = points >= 100 ? totalpoints + (points - 100) * 2 + 50 : totalpoints + (points - 50) * 1;
        //  totalpoints = points < 100 ? totalpoints + (points % 50) * 1 : totalpoints;
        return totalpoints;
    }

    componentDidMount() {
        const purchasePromiseReq = new Promise(resolve=> resolve(getpPrchaseData()));
        purchasePromiseReq.then(res=>{
            const purchasedata = res;
            const purchaseData = purchasedata.length > 0 ? purchasedata.map(trxn=>{
                const selTranPoints = this.calculateTransactionPoints(trxn.amount);
                return {...trxn, ...{rewards: selTranPoints}}
            }) : [];
            this.setState({
                purchaseHistory: purchaseData
            });
        })
    }

    render() {
        const { purchaseHistory } = this.state;
        return (
            <div>
                <PurchaseHistory purchaseHistory={purchaseHistory} />
                <Rewards purchaseHistory={purchaseHistory} />
            </div>
        )
    }
}

export default RetailBase;