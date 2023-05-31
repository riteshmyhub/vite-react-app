import PageRoutes from "./routes/routes";
import "../assets/styles/style.css";

function App() {
   return (
      <>
         <p>Navbar</p>
         <div style={{ height: "calc(100vh - 63px)", overflowY: "scroll" }}>
            <PageRoutes />
         </div>
      </>
   );
}

export default App;
