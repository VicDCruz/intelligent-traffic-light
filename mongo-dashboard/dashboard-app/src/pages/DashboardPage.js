import React from "react";
import { Col, Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "Total al día de hoy",
    vizState: {
      query: {
        "measures": [
          "History.total"
        ],
        "timeDimensions": [
          {
            "dimension": "History.createdAt",
            "dateRange": "Today"
          }
        ],
        "filters": [],
        "timezone": 'America/Mexico_City',
      },
      chartType: "number"
    },
    size: 8
  },
  // {
  //   id: 1,
  //   name: "Contribución por semáforo",
  //   vizState: {
  //     query: {
  //       "measures": [
  //         "History.total1",
  //         "History.total2"
  //       ],
  //       "timeDimensions": [
  //         {
  //           "dimension": "History.createdAt",
  //           "dateRange": "Today"
  //         }
  //       ],
  //       "dimensions": [
  //         "History.formatTime"
  //       ],
  //       "filters": [],
  //       "timezone": 'America/Mexico_City',
  //     },
  //     chartType: "pie"
  //   },
  //   size: 8
  // },
  {
    id: 2,
    name: "Al día de hoy",
    vizState: {
      query: {
        "dimensions": [
          "History.formatTime"
        ],
        "timeDimensions": [
          {
            "dimension": "History.createdAt",
            "dateRange": "Today"
          }
        ],
        "measures": [
          "History.total"
        ],
        "filters": [],
        "timezone": 'America/Mexico_City',
        "order": {
          "History.formatTime": 'asc'
        }
      },
      chartType: "area"
    },
    size: 12
  },
  {
    id: 3,
    name: "Muestras por semáforo",
    vizState: {
      query: {
        "measures": [
          "History.total1",
          "History.total2"
        ],
        "timeDimensions": [
          {
            "dimension": "History.createdAt",
            "dateRange": "Today"
          }
        ],
        "dimensions": [
          "History.formatTime"
        ],
        "filters": [],
        "timezone": 'America/Mexico_City',
        "order": {
          "History.formatTime": 'asc'
        }
      },
      chartType: "line"
    },
    size: 12
  },
];

const DashboardPage = () => {
  const dashboardItem = item => (
    <Col
      span={24}
      lg={item.size}
      key={item.id}
      style={{
        marginBottom: "24px"
      }}
    >
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Col>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12
      }}
    >
      <h2>There are no charts on this dashboard</h2>
    </div>
  );

  return DashboardItems.length ? (
    <div
      style={{
        padding: "0 12px 12px 12px",
        margin: "10px 8px"
      }}
    >
      <Row
        style={{
          padding: "0 20px"
        }}
      ></Row>
      <Row>
        <Dashboard dashboardItems={DashboardItems}>
          {DashboardItems.map(dashboardItem)}
        </Dashboard>
      </Row>
    </div>
  ) : (
      <Empty />
    );
};

export default DashboardPage;
