import { useState, useEffect } from "react";

export default function Loading() {
   const [text, setText] = useState(null);

   useEffect(() => {
      setText("Loading component work!");
      return () => {};
   }, []);

   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
