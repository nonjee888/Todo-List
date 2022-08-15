import React, {useState} from "react";
import './style.css';

function Form({ addTodos, onChange1, onChange2 }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
   
    return (
        <div className="form_box">

            <div className="input-group">
                <label className="form-label">제목</label>
                <input
                    type="text"
                    value={title}
                    className="input1"
                    onChange={(title) => onChange1(title)}
                />
                <label className="form-label">내용</label>
                <input
                    type="text"
                    value={body}
                    className="input2"
                    onChange={(body) => onChange2(body)}
                />
            </div>

            <button className="addTodos"
                onClick={() => addTodos()}
            >
                추가하기
            </button>
        </div>
    );
    
}

export default Form;
