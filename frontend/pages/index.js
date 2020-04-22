import {Button, Alert } from 'reactstrap'
import Layout from '../components/Layout';

export default () => {
  return(
    <Layout>
      <div>
        <div>
          <Alert color="primary" >
            Hello this will be a strapi project with React and Bootstrap.
          </Alert>
          &nbsp; <Button color="primary">Hello from NextJs.</Button> 
        </div>
      </div>
    </Layout>
  );
}