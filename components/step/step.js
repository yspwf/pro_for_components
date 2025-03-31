import React from 'react';
import styles from "./step.css";

// type StepObjType = {
//   key: string;
//   title: string;
//   content: React.ReactNode | string | undefined;
// };

// interface CustomStepsProps {
//   current: number;
//   items: StepObjType[];
// }

const CustomSteps = ({ current = 1, items = [] }) => {
  console.log("current", current)
  // 步骤条内容
  const StepContent = ({ title, stepNumber }) => (
    <div className={['block', current == stepNumber ? 'active':'bgColor'].join(' ')}>
      {title}
    </div>
  );

  // 这里只有最后步骤条或者中间的步骤条才有，第一个没有
  const StepAfterNode = ({ stepNumber }) => (
    <samp
      className={['less1', 'left', current !== stepNumber ? 'bgColor' : ''].join(' ')}
    ></samp>
  );

  return (
    <div className="stepsPage">
      <ul>
        {items?.map((item, index) => {
          const stepNumber = index + 1;
          let node = undefined;
          if (stepNumber == 1) {
            node = (
              <li key={item.key} style={{ width: `calc( 100% / ${items.length})` }}>
                <StepContent stepNumber={stepNumber} title={item?.title} />
                <span
                  className={["less", current !== stepNumber ? "bgBorderColor" :""].join(' ')}
                ></span>
              </li>
            );
          } else if (index == items.length - 1) {
            node = (
              <li key={item.key} style={{ backgroundColor: current == stepNumber ? "#007eff" : "#f5f5f5f5", width: `calc( 100% / ${items.length})` }}>
                <StepAfterNode stepNumber={stepNumber} />
                <StepContent stepNumber={stepNumber} title={item?.title} />
              </li>
            );
          } else {
            node = (
              <li key={item.key} style={{ width: `calc( 100% / ${items.length})` }}>
                <StepAfterNode stepNumber={stepNumber} />
                <StepContent stepNumber={stepNumber} title={item?.title} />
                <span
                  className={["less", "right", current !== stepNumber ? "bgBorderColor" : ""].join(' ')}
                ></span>
              </li>
            );
          }
          return node;
        })}
        <div className="clearfix"></div>
      </ul>
      {/* content */}
      <div className="stepscontent">{items[current - 1]?.content}</div>
    </div>
  );
};

export default CustomSteps;