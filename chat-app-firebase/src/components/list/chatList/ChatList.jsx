import "./chatList.css";

const Chatlist = () => {
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img className="add" src="./plus.png" alt="" />
      </div>
    </div>
  );
};

export default Chatlist;
