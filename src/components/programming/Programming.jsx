import React from "react";
import Divider from "@material-ui/core/Divider";
import Paper from '@mui/material/Paper';
import './programming.scss';

export default function Programming() {
  const style = {
    width: "100%",
    display: "inline-block",
    background: "#263238",
  };

  return (
    <div className="programming">
      <div className="container">
        <h2 className="sub-heading">
          Programming <span className="title">Skills</span>{" "}
          <Divider variant="middle" />{" "}
        </h2>
      </div>
      <div className="programming-console">
        <Paper zDepth={3} style={style}>
          <div className="console-header">
            <div className="console-buttons">
              <div className="console-button btn-1"></div>
              <div className="console-button btn-2"></div>
              <div className="console-button btn-3"></div>
            </div>
          </div>
          <div className="console-content">
            <ul>
              <li>
                &lt;<span className="html-1">html</span>&gt;
              </li>
              <li>
                <ul className="no-top-padding">
                  <li>
                    &lt;<span className="html-1">head</span>&gt; &lt;/
                    <span className="html-1">head</span>&gt;
                  </li>
                  <li>
                    &lt;<span className="html-1">body</span>&gt;
                  </li>
                  <li>
                    <ul className="no-top-padding">
                      <li>
                        &lt;<span className="html-1">ul</span>&gt;
                      </li>
                      <ul className="no-top-padding">
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">JavaScript</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">ReactJS</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">Angular</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">HTML5</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">CSS3</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">Bootstrap</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">Redux</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>

                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">SASS</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">NextJS</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">NodeJS</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">NestJS</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">Basic Python</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">Basic Android</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">My SQL</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                        <li>
                          &lt;<span className="html-1">li</span>&gt;
                          <span className="html-2">Mongo DB</span>
                          &lt;/<span className="html-1">li</span>&gt;
                        </li>
                      </ul>
                      <li>
                        &lt;/<span className="html-1">ul</span>&gt;
                      </li>
                    </ul>
                  </li>
                  <li>
                    &lt;/<span className="html-1">body</span>&gt;
                  </li>
                </ul>
              </li>
              <li>
                &lt;/<span className="html-1">html</span>&gt;
              </li>
            </ul>
          </div>
        </Paper>
      </div>
    </div>
  );
}
