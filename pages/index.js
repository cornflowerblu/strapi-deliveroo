import {Button, Alert } from 'reactstrap'

export default () => {
  return(
    <div>
      <div>
        <Alert color="primary" >
          Hello this will be a strapi project with React and Bootstrap.
        </Alert>
        &nbsp; <Button color="primary">Hello from NextJs.</Button> 
      </div>
    </div>
  );
}