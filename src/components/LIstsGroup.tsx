/** @format */
const ListGroup = () => {
  const items = ['Lagos', 'Ibadan', 'PH', 'Abuja', 'Kano'];

  const handleBtn = (item: string, index: number) => () => {
    console.log(item, index);
  };
  return (
    <div>
      <h2>List</h2>
      <ul className="list-group">
        {items.length === 0 && <p>No items found</p>}
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={index}
            onClick={handleBtn(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListGroup;
