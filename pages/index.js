import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloHomePage = {
        //background: "lightblue"
    };

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu/>
                <Header/>
                <Timeline playLists={config.playLists} />
            </div>
        </>
    );
}
  
export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     );
// }


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(propriedade) { //propriedades
    const playListNames = Object.keys(propriedade.playLists);
    //React usa Retorno por expressão (map) e não estrutura (for)
    return (
        <StyledTimeline>
            {playListNames.map((playListName) => {
                const videos = propriedade.playLists[playListName];
                return (
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}