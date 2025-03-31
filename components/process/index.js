import React from "react";
 
const Progress = ({
      percentage,
      width,
      height,
      borderRadius,
      backgroundColor,
      fontSize,
      textColor,
      text
  }) => {
    return (
        <div style={{ width, height, borderRadius, backgroundColor, overflow: "hidden" }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span
                    style={{
                        fontSize,
                        fontWeight:700,
                        color: textColor,
                    }}
                >
                  {text}
                </span>
            </div>
            <div style={{ background: progressColor,backgroundSize: `${100}% ${percentage}%`, marginTop: `-${height}`, height, width: `${percentage}%`, borderRadius: borderRadius }} />
        </div>
    );
};
 
export default Progress;