import { store } from "../store";

const BoxModel = ({ styles, showMsg }) => {
    styles = store.selectedElProps || styles;

    return (
        <div className={"box-model css-debugger-ignore" + (!showMsg ? " css-debugger-handle" : "")}>
            <div className="margin-box css-debugger-ignore _t">
                <span className="css-debugger-ignore title">
                    <div className="text">margin</div>
                    <span className="top css-debugger-ignore">
                        {styles.mt}
                    </span>
                </span>
                <span className="right css-debugger-ignore" >
                    {styles.mr}
                </span>
                <span className="left css-debugger-ignore" >
                    {styles.ml}
                </span>
                <span className="bottom css-debugger-ignore" >
                    {styles.mb}
                </span>
            </div>
            <div className="padding-box css-debugger-ignore">
                <span className="css-debugger-ignore p">
                    <span className="text-left">padding</span>
                    <span className="top css-debugger-ignore">
                        {styles.pt}
                    </span>
                </span>
                <span className="left css-debugger-ignore" >
                    {styles.pl}
                </span>
                <div className="content-box css-debugger-ignore">
                    {styles.w} x {styles.h}
                </div>
                <span className="right css-debugger-ignore" >
                    {styles.pr}
                </span>
                <span className="bottom css-debugger-ignore" >
                    {styles.pb}
                </span>
            </div>
            {showMsg && <p className="info-p"> Press "Ctrl" + "Space" to select element </p>}
        </div>
    );
}

export default BoxModel;