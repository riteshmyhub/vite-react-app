import React, { useState, useEffect } from "react";

export default function Home() {
   const [text, setText] = useState(null);

   useEffect(() => {
      setText("placeHolder component work!");
      return () => {};
   }, []);

   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
