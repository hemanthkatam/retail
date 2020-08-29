import React from 'react';

const PurchaseHistory = ({ purchaseHistory }) => (
    <div className="purchase-table">
        {
            purchaseHistory.length > 0 &&
            <table>
                <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Total rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        purchaseHistory.map((trxn, idx) =>
                            (
                                <tr key={idx}>
                                    <td>{trxn.id}</td>
                                    <td>{trxn.date}</td>
                                    <td>{trxn.amount}</td>
                                    <td>{trxn.rewards}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        }
    </div>
);

export default PurchaseHistory;