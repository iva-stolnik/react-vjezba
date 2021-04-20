import Button from "react-bootstrap/Button";

function Aside(){
    const alertMe = ()=>{
        alert("Hello! I am an alert box!!");
    }
    return (
        <div className="w-25 ml-1 p-3 bg-secondary text-center text-white">
            <h3>This is my React aside</h3>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit dolorem obcaecati distinctio porro fugiat nemo minima soluta earum. Fuga, ex. Officia, enim ad. Unde autem culpa voluptas laborum quo aliquid aspernatur necessitatibus veritatis, et distinctio nesciunt nulla saepe ipsa cumque maxime! In aliquid dignissimos accusantium ratione voluptatum reprehenderit incidunt.</p>
            <hr/>
            <Button className="bg-dark" onClick={alertMe}>Click Me!</Button>
        </div>
    )    
};

export default Aside;