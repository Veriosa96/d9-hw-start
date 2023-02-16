import { ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FavoriteJob = () => {
  const JobFavorite = useSelector((state) => state.getJob.favorite);
  return (
    <ListGroup>
      {JobFavorite.map((job) => (
        <ListGroupItem>{job.title}</ListGroupItem> //Andiamo ad inserire il valore dell'array che ci insteressa, in questo caso il nome del mestiere
      ))}
    </ListGroup>
  );
};
export default FavoriteJob;
