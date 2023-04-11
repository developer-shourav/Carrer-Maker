import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const SingleQuestion = (props) => {
  const { question, ans } = props.questionData;
  return (
    <div className="shadow-lg py-4 rounded-lg border">
      <div className="collapse">
        <input type="checkbox" />


        <div className="collapse-title text-xl  font-medium text-black">
          <div className="flex items-center justify-between">
          <span>{question}</span>  <button ><FontAwesomeIcon icon={faChevronDown} /></button>
          </div>
        </div>

        <div className="collapse-content">
          <p>{ans} </p>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
