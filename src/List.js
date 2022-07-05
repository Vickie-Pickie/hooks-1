import PropTypes from 'prop-types';

function List({ list, onNameClick }) {
  return (
    <ul className="list">
      {
        list.map((item) => {
          return (
            <li key={item.id} className="list_item" onClick={() => onNameClick(item)}>{item.name}</li>
          );
        })
      }
    </ul>
  );
}

export default List;

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }
  )).isRequired,
  onNameClick: PropTypes.func.isRequired
};
