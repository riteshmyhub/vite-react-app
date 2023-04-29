import React, { useState, useEffect } from "react";

export default function Admin() {
   const [text, setText] = useState(null);

   useEffect(() => {
      setText("Admin component work!");
      return () => {};
   }, []);

   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
