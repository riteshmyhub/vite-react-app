import { useState, useEffect } from "react";

export default function Overview() {
   const [text, setText] = useState(null);

   useEffect(() => {
      setText("Overview component work!");
      return () => {};
   }, []);

   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
