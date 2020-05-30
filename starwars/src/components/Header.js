import React from "react";
import {Container, Navbar, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Row} from "reactstrap";

function Header(props){
	return(
		<Navbar color="dark" dark>
			<Container>
					<InputGroup>
						<InputGroupAddon addonType="prepend">
				          <Button onClick={() => props.setQuery(props.info.prev)}>previous</Button>
				        </InputGroupAddon>	
					
			        	<Input placeholder="Filter by name" onChange={e => props.setQuery("https://rickandmortyapi.com/api/character/?name=" + e.target.value)} />

				    	<InputGroupAddon addonType="append">
				    		<Button onClick={() => props.setQuery(props.info.next)}>next</Button>
				    	</InputGroupAddon>
			    	</InputGroup>
			</Container>
		</Navbar>
	);
}

export default Header;