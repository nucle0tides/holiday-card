import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <>
      <canvas id="snow" />
      <Layout>
        <Card />
      </Layout>
    </>
  );
};

export default App;
