import { useEffect, useRef, useState } from "react";
import { store } from "../store";
import BoxModel from "./BoxModel";
import Highlight, { defaultProps } from "prism-react-renderer";
import TraverseElements from "./TraverseElements";

export const ElementsEditor = () => {

    const Code = ({ code, language }) => {
        return (
            <div className="code">
                <Highlight {...defaultProps} code={code} language={language}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
                {/* <pre>
                    <code className={`language-${language}`}>{code}</code>
                </pre> */}
            </div>
        );
    }
    const Elements = ({ HTMLElement }) => {
        return (
            <div className="elements">
                <Code code={HTMLElement?.outerHTML} language="html" />
                <div className="copy-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                </div>
            </div>
        )
    };
    const Css = () => {
        // let cssText = store.selectedElProps
        // let _v = getComputedStyle(store?.el);
        // const computedStyles = this.computedStyleKeys.reduce((styles, key) => {
        //     const value = getComputedStyle(this.reference)[key];

        //     styles[key] = key === 'fontFamily' ? value.split(',')[0].replace(/"/g, '') : removePx(value);

        //     return styles;
        // }, {});
        // for (let prop in _v) {
        //     console.log(_v[prop]);
        // }
    }
    const Sass = () => {
        /**
         * Todo
         * Try: prism-react-renderer 🖌️
         */
        // let tagName = store.el?.tagName.toLowerCase();
        // let parentSelector = store.el?.classList.length ? (`.` + [...store.el?.classList].join(".")) : tagName;
        let sassText = "";
        let _c = 0;
        const fn = (node) => {
            let tagName = node?.tagName?.toLowerCase();
            let c = node?.classList?.length ? `.` + [...node?.classList].join(".") : tagName;
            sassText += c + ` { /*<${tagName}>*/\n${_c == 0 ? "" : "}"}\n`;
            _c += 1;
            // sassText += ``;
        }
        store.el ? TraverseElements(store.el, fn) : void (0);
        sassText += "}"

        // [...store.el?.children].forEach(child => {

        // })
        return <Code code={sassText} language="scss" />
    }
    let [contentType, setContentType] = useState("Elements");
    function addTab(e) {
        e.target.classList.add("active");
        setContentType(e.target.textContent);
        [...e.target.parentElement.children].filter(el => el != e.target).map(el => {
            el.classList.remove("active");
        })
    }
    return (
        <div className="css-debugger-elements css-debugger-ignore">
            <div className="card-header css-debugger-handle">
                <div className="icons">
                    <div className="grid" title="Show Grid">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                        </svg>
                    </div>
                    <div className="close" title="Close Extension">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className="card-body">
                {!store.selectedElProps && (
                    <div className="info-div css-debugger-handle">
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width={36}
                                height={36}
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="m15.388 13.498 2.552 7.014-4.698 1.71-2.553-7.014-3.899 2.445 1.62-16.02 11.537 11.232-4.558.633zm-.011 5.818-2.715-7.46 2.96-.41-5.64-5.49-.79 7.83 2.53-1.587 2.715 7.46.94-.343z" />
                            </svg>
                        </div>
                        <p>Select an element to edit</p>
                    </div>
                )}
                {store.selectedElProps && <BoxModel styles={null} showMsg={false} />}
                <ul className="dev-tools">
                    <li onClick={addTab}>
                        Elements
                    </li>
                    <li onClick={addTab}>
                        CSS
                    </li>
                    <li onClick={addTab}>
                        Sass
                    </li>
                    <div className="slider"></div>
                </ul>
                <div className="tab-content">
                    {store.selectedElProps && contentType == "Elements" && <Elements HTMLElement={store.el} />}
                    {contentType == "CSS" && <Css />}
                    {store.selectedElProps && contentType == "Sass" && <Sass />}
                </div>
                {/* {store.el && <SyntaxHighlighter language="jsx" style={dark}>
                    {store.el.outerHTML}
                </SyntaxHighlighter>} */}
                <div className="response">
                    {/* element copied to clipboard! */}
                </div>
            </div>
        </div>
    );
}

export default ElementsEditor;