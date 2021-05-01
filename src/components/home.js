import React, {useEffect} from 'react'
import {Jumbotron, Container, Button} from 'reactstrap';

const Home=()=>{
    useEffect(() => {
        document.title="Home";
    },[]);
    return(
        <div>
            <Jumbotron className="text-center">
                <h1>
                    TGL
                </h1>
                <p>
                    this is developed by meg-D
                </p>
                <Container>
                    <Button color="primary" outline>Start using</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;