export const Inspector = ({ clicked }) => (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#2d3436"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className={clicked ? "clicked css-debugger-icon css-debugger-ignore" : "css-debugger-icon css-debugger-ignore"}
        >
            <g>
                <path className="css-debugger-ignore" d="M19 11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2h7"></path>
                <path className="css-debugger-ignore" d="M12 12l4.166 10 1.48-4.355L22 16.166 12 12zM18 18l3 3"></path>
            </g>
        </svg>
    </>
)