
// const heading = React.createElement(  // here heading is the React Element which contain JavaScript Object 
//     "h1",           
//     {id : "heading"},     // attributes 
//     "Hello World from React."    // childer , which will go inside the h1 tag 
// );

/* <div id = "parent"> 
    <div id="child1">
        <h1>I'm h1 Tag</h1>
         <h1>I'm h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 Tag</h1>
         <h1>I'm h2 Tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id : "parent"},
    [React.createElement(
        "div",
        {id : "child1"},
        [ 
            React.createElement(
            "h1",
            {},
            "I'm h1 Tag"
        ), 
        React.createElement(
            "h2",
            {},
            "I'm h2 Tag"
        ), 
    ]

    ),
    React.createElement(
        "div",
        {id : "child2"},
        [ 
            React.createElement(
            "h1",
            {},
            "I'm h1 Tag"
        ), 
        React.createElement(
            "h2",
            {},
            "I'm h2 Tag"
        ), 
    ]

    )]

)

console.log(parent);  // return an Object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  // render method is converting heading into h1 then will put it on the DOM
