import {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';

function Details({ info }) {
  const [detail, setDetail] = useState(null);

  const fetchDetail = async () => {
    let response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
    let result = await response.json();
    setDetail(result);
  }

  useEffect(() => {
   fetchDetail();
  }, [info.id]);

  if (!detail) {
    return (
      <></>
    );
  }

  return (
    <div className="item_wrapper">
      <div className="image_wrapper">
        <img src={detail.avatar} className="item_image"/>
      </div>
      <div className="item_name item_paddings">{detail.name}</div>
      <div className="item_details item_paddings">City: {detail.details.city}</div>
      <div className="item_details item_paddings">Company: {detail.details.company}</div>
      <div className="item_details item_paddings">Position: {detail.details.position}</div>
    </div>
  );
}

export default Details;

Details.propTypes = {
  info: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }
  ).isRequired,
};
