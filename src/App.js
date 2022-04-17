const App = () => {
    const categories = [
        {
            id: 1,
            title: "Hats",
            image: ''
        },
        {
            id: 2,
            title: "Jackets",
            image: ''
        },
        {
            id: 3,
            title: "Sneakers",
            image: ''
        },
        {
            id: 4,
            title: "Womens",
            image: ''
        },
        {
            id: 5,
            title: "Mens",
            image: ''
        }
    ]

    return (
        <div className="category-container">
            {
                categories.map(({ id, title }) => (
                    <div className="category">
                        <div className="background-img"></div>
                        <div className="category-body">
                            <h2>{title}</h2>
                            <p>Shop Now</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default App;
