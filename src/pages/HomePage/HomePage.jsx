import "./HomePage.css"
import Window from "../../components/Window/Window.jsx"
import Background from "../../components/Background/Background"

function HomePage() {
    return (
        <div>
            <Background />
            
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="headerDiv"></div>

                <div style={{ display: "flex", width: "100%", height: "80vh", alignItems: "center"}}>
                    <div style={{ width: "10%", height: "100%" }}></div>

                    <Window>

                    </Window>

                    <div style={{ width: "10%", height: "100%" }}></div>
                </div>

                <div className="watermarkDiv">
                    <p style={{color: "white", alignSelf: "center", fontSize: "0.5em"}}>Made by Jamie Phillips</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage