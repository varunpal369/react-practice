

const heading1 = React.createElement("h1", 
{
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h2",
 {
    id: "title1"
 }, "Heading 2")

 const para = React.createElement("p", {}, "this is paragraph")


 const container = React.createElement("div", {
    id: "container"
 }, [heading1, heading2, para])

 console.log(container);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


const newDiv = React.createElement("div", {id: "newDiv"}, "this is second div");

const newRoot = ReactDOM.createRoot(document.getElementById("secondRoot"));

newRoot.render(newDiv);
