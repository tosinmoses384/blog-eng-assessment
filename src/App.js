import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import HomePage from "./components/HomePage/HomePage";
import CreatePost from "./components/Posts/CreatePost";
import PostsList from "./components/Posts/PostsList";
import PostDetails from "./components/Posts/PostDetails";
import AddNewCategory from "./components/Categories/AddNewCategory";
import { LookupOverviewProvider } from "./context/LookupOverviewContext";

function App() {
  return (
    <LookupOverviewProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-category" element={<AddNewCategory />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </LookupOverviewProvider>
  );
}

export default App;
