import Rightbar from "../../components/rightbar/Rightbar";
import Siderbar from "../../components/sidebar/Siderbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Siderbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
