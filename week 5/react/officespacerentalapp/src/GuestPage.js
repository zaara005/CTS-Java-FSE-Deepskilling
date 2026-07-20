import React from "react";

function GuestPage() {
    return (
        <div>
            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight No</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹5000</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Mumbai</td>
                        <td>Bangalore</td>
                        <td>₹4500</td>
                    </tr>
                </tbody>
            </table>

            <p><b>Login to book tickets.</b></p>
        </div>
    );
}

export default GuestPage;