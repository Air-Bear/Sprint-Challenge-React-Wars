import React from "react";
import {Container, Navbar, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Row} from "reactstrap";

function Header(props){
	return(
		<Navbar color="dark" dark>
			<Container>
				<Row>
					<Button onClick={() => props.setQuery(props.info.prev)}>previous</Button>
					<InputGroup sm={4}>
			        	<Input placeholder="Filter by name" onChange={e => props.setQuery("https://rickandmortyapi.com/api/character/?name=" + e.target.value)} />
			    	</InputGroup>
			    	<Button onClick={() => props.setQuery(props.info.next)}>next</Button>
					</Row>
			</Container>
		</Navbar>
	);
}

export default Header;