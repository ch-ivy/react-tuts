import { useState } from "react";
import {
   Card,
   Button,
   Container,
   Row,
   Col,
   Image,
   Pagination,
} from "react-bootstrap";

const Home = () => {
   const [title, setTitle] = useState("Blog");
   let action = () => {
      setTitle("Article 1");
   };
   let active = 1;
   let items = [];

   const [blogs, setBlogs] = useState([
      {
         title: "My new website",
         body: ` With supporting text below as a natural lead-in to
                        additional content.`,
         author: "mario",
         id: 1,
      },
      {
         title: "Welcome party!",
         body: ` With supporting text below as a natural lead-in to
                        additional content.`,
         author: "yoshi",
         id: 2,
      },
      {
         title: "Web dev top tips",
         body: ` With supporting text below as a natural lead-in to
                        additional content.`,
         author: "mario",
         id: 3,
      },
   ]);

   for (let number = 1; number <= blogs.length / 5; number++) {
      items.push(
         <Pagination.Item key={number} active={number === active}>
            {number}
         </Pagination.Item>
      );
   }

   return (
      <Container>
         <h1 className="content my-5 text-center"> {title} </h1>
         {blogs.map((data) => (
            <Card className="mb-3" key={data.id}>
               <Card.Body>
                  <Row>
                     <Col lg={3} sm={12}></Col>
                     <Col lg={9} sm={12}>
                        <Card.Title>
                           {" "}
                           {data.title}{" "}
                           <small
                              className="fw-bold"
                              style={{ color: "#929982" }}
                           >
                              {" "}
                              - {data.author}{" "}
                           </small>{" "}
                        </Card.Title>
                        <Card.Text> {data.body} </Card.Text>
                        <Button onClick={action}> Read More </Button>
                     </Col>
                  </Row>
               </Card.Body>
            </Card>
         ))}

         <Pagination>{items}</Pagination>
      </Container>
   );
};

export default Home;
