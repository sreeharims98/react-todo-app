import React from "react";
import "./ListItem.css";
import FlipMove from "react-flip-move";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={items.key}>
        <p>
          <input
            className="list-input"
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <svg
              className="icon"
              class="bi bi-trash"
              color="#e74c3c"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </span>
          {/* <span>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                props.deleteItem(item.key);
              }}
            />
          </span> */}

          {/* <img src={remove} alt="asd" height="40px" width="40px" /> */}
        </p>
      </div>
    );
  });
  return (
    <div className="todo-list">
      <FlipMove duration={200} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
};

export default ListItem;
