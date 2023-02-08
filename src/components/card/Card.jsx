import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResevations } from '../../redux/reservations/reservations';
import './card.css';

const Card = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  console.log(reservations);
  useEffect(() => {
    dispatch(fetchResevations());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="card_title">
        <h5>title</h5>
      </div>
      <div className="card_body">
        <p>
          Ldolor sit uam officia dolorem autem soluta,
          rem veritatis adipisci in suscipit fugit inventore
          quae expedita molestias voluptas aliquid
        </p>
      </div>
      <div className="card_footer">
        <button type="button">
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;
