import Card from "./Cards";

function Main(){
    return (
        <div className="bg-dark text-white text-center w-75 p-3 m-auto">
            <h3 className="w-100">This is my React main</h3>
            <div className="d-flex flex-wrap p-2 bd-highlight">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )    
};

export default Main;