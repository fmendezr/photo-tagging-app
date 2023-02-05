import maps from "../maps";
import MapPreview from "../components/MapPreview";

const Home = () => {
    return (
        <>
            <div className="navbar">
                <h1>Sought of Hidden</h1>
            </div>
            <main className="homepage">
                <div className="gridContainer">
                  {maps.map((map) => {
                    return (
                        <MapPreview 
                            name={map.name}
                            image={map.image}
                            id={map.id}
                            key={map.id}
                        />
                    )
                  })}
                </div>
            </main>
        </>
    )
}

export default Home;