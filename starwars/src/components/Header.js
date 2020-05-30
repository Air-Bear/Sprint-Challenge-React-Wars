import React from "react";
import {Container, Navbar, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Row} from "reactstrap";

function Header(props){
	return(
		<Navbar color="dark" dark>
			<Container>
				<Row>
					<Button>previous</Button>
					<InputGroup sm={4}>
			        	<Input placeholder="Filter by name" onChange={e => props.setQuery("?name=" + e.target.value)} />
			    	</InputGroup>
			    	<Button>next</Button>
					</Row>
			</Container>
		</Navbar>
	);
}

export default Header;