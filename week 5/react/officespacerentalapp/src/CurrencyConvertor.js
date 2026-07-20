import React, { useState } from "react";

function CurrencyConvertor() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("Euro");

    const handleSubmit = () => {

        let result = amount * 0.0092;

        alert("Converting to Euro Amount is " + result);
    };

    return (

        <div>

            <h1 style={{color:"green"}}>
                Currency Convertor!!!
            </h1>

            <table>

                <tbody>

                    <tr>
                        <td>Amount:</td>
                        <td>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e)=>setAmount(e.target.value)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Currency:</td>
                        <td>
                            <select
                                value={currency}
                                onChange={(e)=>setCurrency(e.target.value)}
                            >
                                <option>Euro</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button onClick={handleSubmit}>
                                Submit
                            </button>
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

    );
}

export default CurrencyConvertor;