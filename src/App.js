import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
      scale: 48
    };
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    document.addEventListener("mousemove", this.onMouseMove);
    this.moveCursor();
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
    cancelAnimationFrame(this.animationFrame);
  }
  onMouseMove = evt => {
    const { clientX, clientY } = evt;
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    });
  };

  onMouseOver = evt => {
    this.setState({
      scale: 16
    });
  };

  onMouseLeave = evt => {
    this.setState({
      scale: 48
    });
  };

  moveCursor = () => {
    const { mouseX, mouseY, trailingX, trailingY, scale } = this.state;
    var borderWidth;
    var newMouseX;
    var newMouseY;
    if (scale == 16) {
      borderWidth = `.85px solid #ccc`;
      newMouseX = mouseX - 7;
      newMouseY = mouseY - 7;
    } else {
      borderWidth = `.85px solid #152934`;
      newMouseX = mouseX - 20;
      newMouseY = mouseY - 18;
    }

    const diffX = newMouseX - trailingX;
    const diffY = newMouseY - trailingY;

    //  Number in expression is coeficient of the delay. 10 for example. You can play with it.
    this.setState(
      {
        trailingX: trailingX + diffX / 5.5,
        trailingY: trailingY + diffY / 5.5
      },
      () => {
        // Using refs and transform for better performance.
        this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
        this.cursorTrailing.current.style.width = `${scale}px`;
        this.cursorTrailing.current.style.height = `${scale}px`;
        this.cursorTrailing.current.style.border = borderWidth;

        this.animationFrame = requestAnimationFrame(this.moveCursor);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div className="cursors">
          <div className="cursor" ref={this.cursorTrailing} />
        </div>
        <div className="container">
          <div className="main-header-line"></div>
          <div className="side-header-line"></div>

          <div className="main-header">
            <span className="name">Tommy Li</span> is currently a digital
            product designer at{" "}
            <a
              href="https://atlassian.com"
              target="_blank"
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}
            >
              Atlassian
            </a>
            . Previously, he spent four years at{" "}
            <a
              href="https://northwestern.edu"
              target="_blank"
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}
            >
              Northwestern
            </a>{" "}
            learning to design, build, and measure the societal impact of
            technology. He is passionate about{" "}
            <a
              href="https://sumocitrus.com/"
              target="_blank"
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}
            >
              sumo citrus
            </a>{" "}
            and the future of workplaces.
          </div>
          <div className="side-header">
            <div className="side-header-element">
              <a
                href="/"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
              >
                Résumé
              </a>
            </div>
            <div className="side-header-element">
              <a
                href="https://linkedin.com/in/thomastli"
                target="_blank"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
              >
                LinkedIn
              </a>
            </div>
            <div className="side-header-element">
              <a
                href="https://twitter.com/thmstli"
                target="_blank"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
              >
                Twitter
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="faq">
          <div className="who w">
            <div className=" faq-body">
              <h2>Who I Am</h2>
              <p>
                I'm a UX / product designer currently in the Bay Area.
                Originally from Long Island, New York, I came here after four
                years at Northwestern in Evanston, IL, with stops at{" "}
                <a
                  href="https://wish.com"
                  target="_blank"
                  onMouseOver={this.onMouseOver}
                  onMouseLeave={this.onMouseLeave}
                >
                  Wish
                </a>
                ,{" "}
                <a
                  href="https://groupon.com"
                  target="_blank"
                  onMouseOver={this.onMouseOver}
                  onMouseLeave={this.onMouseLeave}
                >
                  Groupon
                </a>
                ,{" "}
                <a
                  href="https://braintreepayments.com"
                  target="_blank"
                  onMouseOver={this.onMouseOver}
                  onMouseLeave={this.onMouseLeave}
                >
                  Braintree
                </a>
                , and the{" "}
                <a
                  href="https://design.northwestern.edu/programs/bay-area-immersion/"
                  target="_blank"
                  onMouseOver={this.onMouseOver}
                  onMouseLeave={this.onMouseLeave}
                >
                  NU Bay Area Immersion Program
                </a>{" "}
                along the way.
              </p>
            </div>{" "}
            <div className="image-stack i1">
              <img src="/face.jpg" />
            </div>
            <div className="faq-body">
              <h2>What I Can Do</h2>
            </div>
            <div className="image-stack i2">
              <img src="/face.jpg" />
            </div>
            <div className="faq-body">
              <h2>What I'm Looking For</h2>
              I'
            </div>
            <div className="image-stack i3">
              <img src="/face.jpg" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div
            className="left-footer tooltip"
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}
          >
            © 2020 Tommy Li
            <span class="tooltiptext">
              Can I be real with you? I'm honestly not sure if this IS
              copyrighted. Like, at all
            </span>
          </div>
          <div className="right-footer">
            <a
              href="/"
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}
            >
              thomastli@u.northwestern.edu
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
