import React from "react";
// import 'antd/dist/antd.css';
import './Teachers.css'

const Teachers = () => {
    return (
        <>
      <p id={'teachers'}>Teachers component</p> <br/>

          {/*<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700;900&display=swap" rel="stylesheet">*/}

      <hr/>
          <div className="container">
              <div className="quote">
                  <img src={'https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_960_720.png'} alt=""/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium minus, sapiente earum quaerat repellat?</p>
                      <span>John Doe</span>
              </div>
              <div className="quote">
                  <img src={'https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_960_720.png'} alt=""/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium minus, sapiente earum quaerat repellat?</p>
                      <span>John Doe</span>
              </div>
              <div className="quote">
                  <img src={'https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_960_720.png'} alt=""/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium minus, sapiente earum quaerat repellat?</p>
                      <span>John Doe</span>
              </div>
              <div className="quote">
                  <img src={'https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_960_720.png'} alt=""/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium minus, sapiente earum quaerat repellat?</p>
                      <span>John Doe</span>
              </div>
          </div>
        </>
    );
}

export default Teachers;
