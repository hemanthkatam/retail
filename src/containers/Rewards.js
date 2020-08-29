import React, { Component } from 'react';

class Rewards extends Component {
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

    getTotalRewards = () => {
        const { purchaseHistory } = this.props;
        const totalPoints = purchaseHistory.reduce((total, ele) => {
            const selTranPoints = this.calculateTransactionPoints(ele.amount);
            const totalPoints = selTranPoints + total;
            return totalPoints
        }, 0)
        return totalPoints
    }

    render() {
        const rewardpoints = this.getTotalRewards();
        return (
            <div>
                Total Rewards: {rewardpoints}
            </div>
        )
    }
}

export default Rewards;