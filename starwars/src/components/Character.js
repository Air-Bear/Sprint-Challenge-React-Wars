// Write your Character component here
import React from "react";
import {Container, Col, Row,  Button, Card, CardBody, CardSubtitle, CardTitle, CardText, CardImg} from "reactstrap";
import axios from "axios";

function CharacterCard(props){
	console.log(props);
	return(
		<Col>
			<Card>
				<CardImg src={props.data.image}/>
				<CardTitle>{props.data.name}</CardTitle>
				<CardSubtitle>{props.data.status}</CardSubtitle>
				<Button>More Info</Button>
			</Card>
		</Col>
	);
}

export default CharacterCard;