import React from "react"
import "./index.css"

const CallsAnalytics = () => {
    return (
        <div className="analyticssection">
            <div className="section">
                <p className="analytictext">
                    Новые звонки <span className="greenmark"> 20 из 30 шт</span>
                </p>
                <img
                    className="emptygreenbar"
                    src="/img/emptyBar.png"
                    alt="bar"
                />
                <img
                    className="greenbar"
                    src="/img/greenBar.png"
                    alt="greenbar"
                />
            </div>
            <div className="section">
                <p className="qualitytext">
                    Качество разговоров <span className="yellowmark"> 40%</span>
                </p>
                <img
                    className="emptyyellowbar"
                    src="/img/emptyBar.png"
                    alt="bar"
                />
                <img
                    className="yellowbar"
                    src="/img/yellowBar.png"
                    alt="greenbar"
                />
            </div>
            <div className="section">
                <p className="conversiontext">
                    Конверсия в заказ <span className="redmark"> 67%</span>
                </p>
                <img
                    className="emptyredbar"
                    src="/img/emptyBar.png"
                    alt="bar"
                />
                <img className="redbar" src="/img/redbar.png" alt="greenbar" />
            </div>
        </div>
    )
}

export default CallsAnalytics
