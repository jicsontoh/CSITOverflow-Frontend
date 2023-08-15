import React from "react";
import moment from "moment";

import "./ContentCard.css";

const ContentCard = (props) => (
  <div className="content-card">
    <div className="content-grid">
      <div className="info-cell">
        <div className="info">
          <div className="details">
            <h2>{props.username}</h2>
          </div>
          <div className="date">
            <p>User joined - {moment(props.created_at).fromNow(false)}</p>
          </div>
        </div>
      </div>
      <div className="stats-cell">
        <div className="count-sec">
          <div className="counts">
            <div className="cells">
              <div className="column-grid">
                <div className="head fc-black-700">{props.answer_count}</div>
                <div className="foot fc-black-500">answers</div>
              </div>
            </div>
            <div className="cells">
              <div className="column-grid">
                <div className="head fc-black-700">{props.post_count}</div>
                <div className="foot fc-black-500">questions</div>
              </div>
            </div>
            <div className="cells">
              <div className="column-grid">
                <div className="head fc-black-700">{props.comment_count}</div>
                <div className="foot fc-black-500">comments</div>
              </div>
            </div>
            {/* <div className="cells">
              <div className="column-grid">
                <div className="head fc-black-700">{props.tags_count}</div>
                <div className="foot fc-black-500">tags</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContentCard;
