import React, { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const wrapper = useRef();

  useEffect(() => {
    const bot = new window.ChatSDK({
      root: wrapper.current,
      config: {
        navbar: {
          title: "智能助理"
        },
        robot: {
          avatar: "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        },
        messages: [
          {
            type: "text",
            content: {
              text: "智能助理为您服务，请问有什么可以帮您？"
            }
          }
        ]
      },
      requests: {
        /* ... */
      },
      handlers: {
        /* ... */
      }
    });
    bot.run();
  }, []);

  return <div style={{ height: "100%" }} ref={wrapper} />;
}
