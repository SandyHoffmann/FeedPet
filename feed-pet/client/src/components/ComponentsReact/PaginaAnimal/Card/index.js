import { Link } from "react-router-dom";
import "./styles.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {MdWarning} from 'react-icons/md'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export function CardTesteReact(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}
    style={{
        margin: '2px',
        marginBottom:'25px',
        display: 'block',
        flexGrow:'1fr',
        width: '30%'

    }}
    
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imagem}
          title={props.nome}
        />
        <CardContent>
          {props.status==='Desaparecido'&&<p className="desaparecido"><MdWarning color="white"/> Desaparecido!</p>}
          <Typography gutterBottom variant="h5" component="h2">
            {props.nome}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.raca}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/perfil/${props.id}`} id={props.id} activeClassName="selected" className="link-drop">Perfil</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
// export function CardTesteReact(props){
// return(
//     <div className="card cardReact" key={props.id} className="cardReact">
//     <img className="card-img-top" src={img} alt="Card image cap"/>
//     <div className="card-body">
//         <h5 className="card-title">{props.nome}</h5>
//         <p className="card-text">{props.raca}</p>
//         <a href="#" className="btn"><Link to={`/perfil/${props.id}`} id={props.id} activeClassName="selected" className="link-drop">Perfil</Link></a>
//     </div>
//     </div>
// )
// }

