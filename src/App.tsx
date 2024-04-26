import Card from "./components/Card";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <div className="w-full h-full p-5 flex gap-5 flex-wrap ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}

export default App;
