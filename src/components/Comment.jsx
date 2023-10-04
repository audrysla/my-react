import { useEffect, useRef } from "react";

function Comment() {
  const commentsEl = useRef(null);

  const scriptEl = document.createElement("script");
  useEffect(() => {
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "audrysla/my-react");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <div>
      <div ref={commentsEl} /> 
    </div>
  );
}

export default Comment;