import React, { useState } from 'react';

const GoldLoanCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [eligibleLoan, setEligibleLoan] = useState<number>(0);
    const [error, setError] = useState<string>('');

    const handleCalculateLoan = () => {
        if (loanAmount <= 0) {
            setError('Please enter a valid loan amount.');
            setEligibleLoan(0);
            return;
        }

        // Simple calculation: For example, assume eligibility is 75% of the loan amount
        const calculatedEligibleLoan = loanAmount * 0.75;
        setEligibleLoan(calculatedEligibleLoan);
        setError('');
    };

    return (
        <div className="gold-loan-calculator">
            <h2>Gold Loan Eligibility Calculator</h2>
            <div className="calculator-input">
                <label htmlFor="loanAmount">Enter Loan Amount:</label>
                <input
                    type="number"
                    id="loanAmount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <button onClick={handleCalculateLoan}>Calculate</button>
            </div>

            <div className="bob-monthly-loan-emi bob-right-cal-details">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="bob-m-img-text-div">
                            <div className="bob-m-img-div">
                                {/* SVG Icon for Loan Eligibility */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="94.287" height="63.805" viewBox="0 0 94.287 63.805" className="mle-svg">
                                    <defs>
                                        <style>
                                            {`
                                            .mle-svg .a { fill: #f26522; }
                                            .mle-svg .b { fill: #f4ab87; }
                                            .mle-svg .c { fill: #f8bf9d; }
                                            .mle-svg .d, .mle-svg .e { isolation: isolate; }
                                            .mle-svg .e { fill: #1f276c; font-size: 28px; font-family: RupeeForadian, Rupee Foradian; }
                                            `}
                                        </style>
                                    </defs>
                                    <g transform="translate(0 -78.624)">
                                        <path className="a" d="M306.141,317.919v10.735c0,3.646-9.722,6.684-21.673,6.684S263,332.4,263,328.755V327.54l-.2-8.507h.1c1.62,3.139,10.533,5.57,21.267,5.57s21.774-3.038,21.774-6.684h.2Z" transform="translate(-211.855 -192.909)" />
                                        <path className="b" d="M189.517,112.074v10.634h-.2c0,3.747-10.026,6.684-21.875,6.684a51.976,51.976,0,0,1-13.672-1.519l-.2.2a23.663,23.663,0,0,0-7.494-4.152v-.2l-.3-11.241c.709,3.443,10.127,6.178,21.571,6.178s21.976-2.937,21.976-6.583Z" transform="translate(-117.511 -26.966)" />
                                        <path className="c" d="M189.518,85.311h0c0,3.646-10.026,6.583-21.976,6.583s-20.964-2.734-21.673-6.178c0-.1-.1-.3-.1-.405,0-3.646,9.722-6.684,21.774-6.684C179.593,78.526,189.518,81.564,189.518,85.311Z" transform="translate(-117.512)" />
                                        <path className="b" d="M262.055,275.231h0l-.1-2.228-.2-9.115c.709,3.443,10.127,6.178,21.571,6.178s21.571-2.937,21.875-6.482h.1v10.532h-.2c0,3.646-9.824,6.684-21.774,6.684S263.675,278.37,262.055,275.231Z" transform="translate(-211.012 -149.106)" />
                                        <path className="a" d="M188.608,319.922a21.73,21.73,0,0,0,5.975-9.317h.506c2.228.2,4.456.3,6.887.3h1.013v2.228l.2,8.507h-1.114a52.476,52.476,0,0,1-13.165-1.418Z" transform="translate(-152.048 -187.013)" />
                                        <path className="b" d="M228.361,255.5V256l.2,9.419H227.55c-2.532,0-4.861-.1-7.089-.3h-.506a20.783,20.783,0,0,0,1.013-6.583,20.5,20.5,0,0,0-.506-4.355h.506c2.127.2,4.254.3,6.583.3l.911.506A1.1,1.1,0,0,0,228.361,255.5Z" transform="translate(-177.318 -141.526)" />
                                        <path className="a" d="M186.2,172.1a51.973,51.973,0,0,0,13.672,1.519c11.849,0,21.875-2.937,21.875-6.684h.2v11.95c-11.039,0-20.052,2.633-21.166,5.975l-.911-.506q-3.342,0-6.38-.3h-.506A20.442,20.442,0,0,0,186,172.2Z" transform="translate(-149.943 -71.189)" />
                                        <g transform="translate(0 95.539)">
                                            <path className="c" d="M43.245,183.2h0a22.167,22.167,0,0,0-7.19-12.051,19.244,19.244,0,0,0-7.7-4.254,19.563,19.563,0,0,0-6.38-1.013,21.775,21.775,0,1,0-.405,43.547,22.215,22.215,0,0,0,14.988-5.773,21.993,21.993,0,0,0,6.076-9.621,20.168,20.168,0,0,0,1.013-6.482C43.65,186.138,43.245,184.619,43.245,183.2Z" transform="translate(0 -165.883)" />
                                            <path className="c" d="M305.2,235.164v.2c-.3,3.545-10.127,6.482-21.875,6.482s-20.862-2.734-21.571-6.178v-.506a1.286,1.286,0,0,1,.1-.608c1.114-3.342,10.127-5.975,21.166-5.975h.3C295.273,228.581,305.2,231.518,305.2,235.164Z" transform="translate(-211.012 -216.427)" />
                                        </g>
                                        <g className="d" transform="translate(12.988 101.398)">
                                            <text className="e" transform="translate(0 26)">
                                                <tspan x="0" y="0">₹</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="bob-m-text-div">
                                {error ? (
                                    <p className="error-message">{error}</p>
                                ) : (
                                    <p>₹ {eligibleLoan.toFixed(2)}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldLoanCalculator;
