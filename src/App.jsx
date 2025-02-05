import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import DisplayUser from "./components/DisplayUser";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import FriendsList from "./pages/friends/FriendsList";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DisplayUser />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/friends" element={<FriendsList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
