impor;
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement(//children
    "div", {
        id: "childOne"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "I am an h1 tag"),
        React.createElement("h2", {
            id: "heading"
        }, "I am an h2 tag")
    ]),
    React.createElement(//children
    "div", {
        id: "childTwo"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "I am an h1 tag"),
        React.createElement("h2", {
            id: "heading"
        }, "I am an h2 tag")
    ])
] //children (siblings)
); //{} takes attributes for an tag
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
