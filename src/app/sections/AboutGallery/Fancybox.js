import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
    const delegate = props.delegate || "[data-fancybox='gallery']";
  
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
      const opts = props.options || {};
  
      NativeFancybox.bind(delegate, opts);
  
      return () => {
        NativeFancybox.destroy();
      };
    }, []);
    /* eslint-disable react-hooks/exhaustive-deps */
  
    return <>{props.children}</>;
  }

export default Fancybox;
