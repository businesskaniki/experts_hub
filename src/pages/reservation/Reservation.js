import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getAllReservations } from '../../redux/reservations/reservations';

const Reservation = ({ userId }) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(getAllReservations(userId));
  }, [dispatch, userId]);

  return (
    <section>
      {reservations?.map((reservation) => (
        <Card key={reservation.id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/technician/${reservation.id}`}>
                {reservation.name}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {reservation.specialization}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography>{reservation.location}</Typography>
            <Button size="small" className="btn-appointment">
              Remove
            </Button>
            <Typography>{reservation.charges}</Typography>
          </CardActions>
        </Card>
      ))}
    </section>
  );
};

export default Reservation;
