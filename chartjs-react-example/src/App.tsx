// https://byul91oh.tistory.com/541
// https://velog.io/@jinu_820/react%EC%97%90%EC%84%9C-chart.js-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
// https://velog.io/@treejy/React%EC%97%90%EC%84%9C-Chart.js-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-TypeScript
// https://tech.toktokhan.dev/2021/07/20/start-chartjs/
// https://react-chartjs-2.js.org/examples/multitype-chart/
// https://react-chartjs-2.js.org/faq/typescript/
// https://mytutorials.tistory.com/425

import React, { useState } from "react";
import "./App.css";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Chart,
  ChartDataset,
} from "chart.js";

import type { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export interface ChartData<> {
  labels?: TLabel[];
  datasets: ChartDataset<TType, TData>[];
}

export const data = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  // labels 대신 아래와 같이 각각의 데이터의 x값을 개별적으로 전달해줍니다.
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      data: [
        { x: "January", y: 1 },
        { x: "February", y: 2 },
        { x: "March", y: 3 },
        { x: "April", y: 4 },
        { x: "May", y: 5 },
      ],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(255, 99, 132)",
      data: [
        { x: "January", y: 1 },
        { x: "February", y: 2 },
        { x: "March", y: 3 },
        { x: "April", y: 4 },
        { x: "May", y: 5 },
        { x: "June", y: 6 },
      ],
      borderColor: "red",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(75, 192, 192)",
      data: [
        { x: "January", y: 1 },
        { x: "February", y: 2 },
        { x: "March", y: 3 },
        { x: "April", y: 4 },
        { x: "May", y: 5 },
        { x: "June", y: 6 },
      ],
    },
  ],
};

const options = {
  spanGaps: true, // line 타입의 경우 중간에 누락된 데이터가 있을 경우 이어그릴지 여부를 정합니다!
  maxBarThickness: 30, // bar 타입의 경우 막대의 최대 굵기를 정합니다!
  // x축 값이 같은 애들끼리 그룹화할지를 정하는데요,
  // true 설정 시 해당 x축 값내에서 서로 공간을 나누면서 나란히 보여지게 되고,
  // false 설정 시 각 포인트가 해당 x축 정중앙에 그려지게 되어서 x축 값이 같은 애들끼리 서로 겹쳐지게 됩니다.
  grouped: true,
  interaction: {
    mode: "index",
  },
  // 호버 동작과 관련된 설정인데요, 호버를 하게 되면 툴팁이 뜨게 되는데
  // 그 툴팁이 뜨는 기준을 설정할 수 있습니다.
  // 위와 같이 index를 기준으로 설정하게 되면 동일한 index에 놓인 값들이 모두 떠요!
  plugins: {
    legend: {
      // 범례 스타일링
      labels: {
        usePointStyle: true, // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시됩니다.
        padding: 10, // 범례 간 가로 간격을 조정할 수 있습니다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않아요. ㅠㅠ
        font: {
          // 범례의 폰트 스타일도 지정할 수 있습니다.
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      },
    },
    tooltip: {
      // 툴팁 스타일링
      backgroundColor: "rgba(124, 35, 35, 0.4)", // 툴팁 색상을 지정할 수 있습니다.
      padding: 10, // 툴팁 패딩을 지정할 수 있습니다.
      bodySpacing: 5, // 툴팁 내부의 항목들 간 간격을 조정할 수 있습니다.
      bodyFont: {
        font: {
          // 툴팁 내용의 폰트 스타일을 지정할 수 있습니다.
          family: "'Noto Sans KR', sans-serif",
        },
      },
      usePointStyle: true, // 범례 도형 모양과 마찬가지로 툴팁 내부에서도 도형의 모양을 지정할 수 있어요.
      filter: (item) => item.parsed.y !== null,
      // 툴팁에 표시될 항목을 필터링할 수 있는데요,
      // 예를 들어 값이 null인 항목은 툴팁에 나타나지 않게 하려면
      // 위와 같이 설정해주시면 됩니다.
      callbacks: {
        // 툴팁에 표시되는 내용은 이와 같이 콜백 함수를 통해
        // 조건에 맞게 수정할 수 있습니다!
        title: (context) => context[0].label + "💙",
        // (context를 콘솔에 찍어보시면 차트에 전달되는 dataset과
        // 그 값들을 확인할 수 있는데요, 이를 바탕으로 조건을 구성하고
        // 그 조건에 따라 title을 재설정해주시면 됩니다.)
        label: (context) => {
          // 툴팁에서 y축 값이 어떻게 표시될지 설정할 수 있어요.
          let label = context.dataset.label + "" || "";

          const isPrice = label === "주가";
          const isEV = label === "EV";

          // 마찬가지로 재설정한 label도 꼭 반환해주세요!
          return context.parsed.y !== null // y축 값이 null이 아니라면,
            ? // 조건에 따라 label 재할당
              label + ": " + context.parsed.y + "배"
            : null; // y축 값이 null이라면 null 반환
        },
      },
    },
  },
  scales: {
    // x축과 y축에 대한 설정을 할 수 있습니다.
    // 여기서 x는 이 축의 id인데요, 이 안에서 axis 속성만 x로 지정해놓으시면 id를 x가 아니라 다른 이름으로 설정해도 무관합니다.
    x: {
      // afterTickToLabelConversion을 이용하여
      // x축 값이 어떻게 표시될지 설정할 수 있어요!
      afterTickToLabelConversion: function (scaleInstance) {
        const ticks = scaleInstance.ticks;

        const newTicks = ticks.map((tick) => {
          return {
            // 원본 x축 값을 이용하여 각 x축 값들이 어떻게 표시될지 수정할 수 있습니다.
            ...tick,
            label: tick.label + "🎵",
          };
        });

        scaleInstance.ticks = newTicks;
        // scaleInstance.ticks에 새로운 ticks를 재할당해줘야 적용이 됩니다!
      },
      grid: {
        // x축을 기준으로 그려지는 선(세로선)에 대한 설정입니다.
        display: false, // 선이 아예 안 그려지게 됩니다.
        drawTicks: true, // 눈금 표시 여부를 지정합니다.
        tickLength: 4, // 눈금 길이를 지정합니다.
        color: "#E2E2E230", // 눈금 및 선의 색상을 지정합니다.
      },
      axis: "x", // x축(가로축)인지 y축(세로축)인지 표시합니다.
      // max: Date.parse(xMax) + 1296000000, // 축의 최대값을 강제합니다.
      // min: Date.parse(xMin), // 축의 최소값을 강제합니다.
      position: "bottom",
      // top으로 설정하면 가로축이 차트 상단에 그려지게 됩니다!
      ticks: {
        minRotation: 45, // x축 값의 회전 각도를 설정할 수 있어요.
        padding: 5, // x축 값의 상하 패딩을 설정할 수 있어요.
      },
    },
    y: {
      // 'y'라는 id를 가진 y축에 대한 설정
      type: "linear",
      // 리니어 스케일뿐만 아니라 로그 스케일로도 표시할 수 있습니다.
      grid: {
        // 가로선 설정
        color: "#E2E2E230",
      },
      afterDataLimits: (scale) => {
        // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
        // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
        // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
        scale.max = scale.max * 1.2;
      },
      axis: "y", // 이 축이 y축임을 명시해줍니다.
      display: true, // 축의 가시성 여부도 설정할 수 있습니다.
      position: "left", // 축이 왼쪽에 표시될지, 오른쪽에 표시될지 정할 수 있습니다.
      title: {
        // 이 축의 단위 또는 이름도 title 속성을 이용하여 표시할 수 있습니다.
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "단위: 배",
      },
    },
    // y축을 여러 개 두고 싶다면 아래와 같이 또 만들어 주세요.
    y_sub: {
      position: "right",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "단위: 배",
      },
      afterDataLimits: (scale) => {
        scale.max = scale.max * 1.2;
      },
    },
  },
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Line data={data} />
      <Bar data={data} options={options} />
      <Chart type="bar" data={data} />

      <Line type="line" data={data} options={options} />
    </div>
  );
}

export default App;
function rand() {
  throw new Error("Function not implemented.");
}
