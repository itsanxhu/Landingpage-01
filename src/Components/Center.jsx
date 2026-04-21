const Center = () => {
  return (
    <div className="center-main">
      <h1>
        Hi, It's <span>Alex</span>
      </h1>
      <h3>
        I'm a <span>Script Writer</span>
      </h3>
      <p>
        Build something that actually works. Clean design, smooth performance,
        and ideas that don’t feel recycled. Start creating today.
      </p>
      <div className="links">
        <a href="https://www.linkedin.com/in/itsanshu/" target="_blank">
          <img
            src="https://img.freepik.com/premium-vector/linkedin-logo-icon_1273375-1174.jpg?semt=ais_hybrid&w=740&q=80"
            alt="LinkedIn"
          />
        </a>
        <a href="https://x.com/itsanxhu" target="_blank">
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?semt=ais_hybrid&w=740&q=80"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/itsanxhu" target="_blank">
          <img
            className="github"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="LinkedIn"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg"
            alt="LinkedIn"
          />
        </a>
      </div>
      <button className="btn">Hire me</button>
    </div>
  );
};

export default Center;
