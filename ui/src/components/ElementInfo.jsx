import { useEffect } from "react";
import { store } from "../store";

import BoxModel from "./BoxModel";
import { toggleDebugger } from "../App";
const ElementInfo = () => {
    let styles = { getPropertyValue: () => "" };
    let __styles = null;
    useEffect(() => {
        document.documentElement.addEventListener("keyup", e => {
            if (e.ctrlKey && (e.key == " " ||
                e.key == 32
            )) {
                store.setSelectedElProps(__styles);
                store.setClicked(!store.clicked);
                toggleDebugger();
            }
        });
        if (!store.el) {
            return;
        }
        styles = getComputedStyle(store.el);
    }, []);
    styles = store.el ? getComputedStyle(store.el) : styles;
    __styles = { mt: styles.getPropertyValue('margin-top'), mr: styles.getPropertyValue('margin-right'), mb: styles.getPropertyValue('margin-bottom'), ml: styles.getPropertyValue('margin-left'), pt: styles.getPropertyValue('padding-top'), pr: styles.getPropertyValue('padding-right'), pb: styles.getPropertyValue('padding-bottom'), pl: styles.getPropertyValue('padding-left'), w: styles.getPropertyValue('width'), h: styles.getPropertyValue('height') };
    return (
        !store.selectedElProps &&
        <div className="el-info css-debugger-ignore" style={
            {
                display: store.clicked ? "flex" : "none",
                left: store.coords.x + 10,
                top: store.coords.y + 10,
            }
        }>

            <span className="el-name css-debugger-ignore">{store.el?.tagName.toLowerCase()}{store._h ? `.` + ([store.el?.classList].join(".")) : ""}</span>
            <BoxModel styles={__styles} showMsg={true} />
            {/* <div className="box-model css-debugger-ignore">
                <div className="margin-box css-debugger-ignore _t">
                    <span className="css-debugger-ignore title">
                        <div className="text">margin</div>
                        <span className="top css-debugger-ignore">
                            {styles.getPropertyValue('margin-top')}
                        </span>
                    </span>
                    <span className="right css-debugger-ignore" >
                        {styles.getPropertyValue('margin-right')}
                    </span>
                    <span className="left css-debugger-ignore" >
                        {styles.getPropertyValue('margin-left')}
                    </span>
                    <span className="bottom css-debugger-ignore" >
                        {styles.getPropertyValue('margin-bottom')}
                    </span>
                </div>
                <div className="padding-box css-debugger-ignore">
                    <span className="css-debugger-ignore p">
                        <span className="text-left">padding</span>
                        <span className="top css-debugger-ignore">
                            {styles.getPropertyValue('padding-top')}
                        </span>
                    </span>
                    <span className="left css-debugger-ignore" >
                        {styles.getPropertyValue('padding-left')}
                    </span>
                    <div className="content-box css-debugger-ignore">
                        {styles.getPropertyValue('width')} x {styles.getPropertyValue('height')}
                    </div>
                    <span className="right css-debugger-ignore" >
                        {styles.getPropertyValue('padding-right')}
                    </span>
                    <span className="bottom css-debugger-ignore" >
                        {styles.getPropertyValue('padding-bottom')}
                    </span>
                </div>
                <p class="info-p"> Press "Ctrl" + "Space" to edit element </p>
            </div> */}
        </div>
    );
}

export default ElementInfo;