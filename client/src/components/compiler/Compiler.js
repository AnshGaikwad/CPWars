import axios from "axios";
import "./Compiler.css";
import stubs from "./Stubs";
import React, { useState, useEffect } from "react";
import moment from "moment";

function Compiler() {

  

  return (
    <>
    <div className="row container-fluid">
      <div className="col-6 ml-4 ">
        <label for="solution ">
          <span className="badge badge-info heading mt-2 ">
            <i className="fas fa-code fa-fw fa-lg"></i> Code Here
          </span>
        </label>
        <textarea
          required
          name="solution"
          id="source"
          // onChange={}
          className=" source"
          // value={this.state.input}
        ></textarea>

        <button
          type="submit"
          className="btn btn-danger ml-2 mr-2 "
          // onClick={this.submit}
        >
          <i class="fas fa-cog fa-fw"></i> Run
        </button>

        <label for="tags" className="mr-1">
          <b className="heading">Language:</b>
        </label>
        <select
          // value={this.state.language_id}
          // onChange={this.language}
          id="tags"
          className="form-control form-inline mb-2 language"
        >
          <option value="2">C++</option>
          <option value="1">C</option>
          <option value="4">Java</option>
          <option value="10">Python</option>
        </select>
      </div>
      <div className="col-5">
        <div>
          <span className="badge badge-info heading my-2 ">
            <i className="fas fa-exclamation fa-fw fa-md"></i> Output
          </span>
          <br/>
          <textarea id="output"></textarea>
        </div>
      </div>
    </div>

    <div className="mt-2 ml-5">
      <span className="badge badge-primary heading my-2 ">
        <i className="fas fa-user fa-fw fa-md"></i> User Input
      </span>
      <br />
      <textarea id="input" 
      // onChange={this.userInput}
      ></textarea>
    </div>
  </>
  );
}

export default Compiler;
