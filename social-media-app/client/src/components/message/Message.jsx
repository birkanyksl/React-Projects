import "./message.css";
import { useTimeAgo } from "next-timeago";

const Message = ({ message, own }) => {
  const { TimeAgo } = useTimeAgo();
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/4761665/pexels-photo-4761665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        <TimeAgo date={message.createdAt} />
      </div>
    </div>
  );
};

export default Message;
