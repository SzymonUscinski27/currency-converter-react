import Header from "./Header";
import Label from "./Label";
import Button from "./Button";
import Form from "./Form";
import Result from "./Result";
import Table from "./Table";
import Paragraph from "./Paragraph";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="App">
        <Form>
          <Header />
          <Label />
          <Button />
          <Result />
        </Form>
        <Table />
        <Paragraph />
        <Footer />
      </div>

    </>
  );
}

export default App;
