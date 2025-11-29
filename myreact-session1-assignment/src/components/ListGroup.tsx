const ListGroup = ()=>{

    let items = [
        {        topic : 'What is react', id:0
        },
        {        topic : 'Folder structure in React', id:1
        },
        {        topic : 'JSXs', id:2
        },
        {     topic:'Rendering lists ', id:3
        },
        {        topic:'Conditional rendering ', id:4
        }

    ]

    items =[];


    return(
        <>
        <h3>Liist Group</h3>
        { items.length === 0 && <p>No topics available.</p>}
        <ul className="list">
            {
                items.map((item => (<li key={item.id} > {item.topic}</li>)))
            }
        </ul>
        </>
    );
}
export default ListGroup;