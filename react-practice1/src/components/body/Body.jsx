import React from "react";
import "./style.css";

function Body() {

  return (
    <div className="wrap">
      <div className="label-input-group">
        <label className="label-email">Email</label>
        <input className='input-email'></input>
        <label className="label-pw">Password</label>
        <input className='input-pw'></input>
      </div>
      <div
        className="button-group">
        <button
          className="btn-login"
          style={{ backgroundColor: "#65718f" }}
        >로그인
        </button>
        <button
          className="btn-signUp"
          style={{ backgroundColor: "#65718f" }}
        >회원가입
        </button>
      </div>
    </div>
  );

}


export default Body;