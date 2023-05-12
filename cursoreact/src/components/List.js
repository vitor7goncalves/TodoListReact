const List = () => {
    const items = [{
        id: 1,
        charClass: "Paladin"
    }, {
        id: 2,
        charClass: "Cleric"
    }, {
        id: 3,
        charClass: "Monk"
    },
    ];
    return (
        <div>
            {items.map((item) =>
                <p key={item.id}>
                    {item.id} - {item.charClass}
                </p>
            )}
        </div>
    );
};

export default List;