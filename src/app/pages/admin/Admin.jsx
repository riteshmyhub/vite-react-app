import React, { useState, useEffect } from "react";

export default function Admin() {
   const [text, setText] = useState(null);

   useEffect(() => {
      setText("PlaceHolder component work!");
      return () => {};
   }, []);

   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
