import React from "react";
import { Space, Button, Card, Typography } from "antd";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const { Title, Text } = Typography;

  return (
    <div className={styles.container}>
      <Space size="small" align="center">
        <Card className={cx(styles.card, styles.infected)}>
          <Title level={4} style={{ color: "rgba(0, 0, 255, 0.5)" }}>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Title>
          <Text style={{ color: "textSecondary" }}>
            {new Date(lastUpdate).toDateString()}
          </Text>
          <br />
          <Text strong="true">Number of active cases of Covid-19</Text>
        </Card>

        <Card className={cx(styles.card, styles.recovered)}>
          <Title level={4} style={{ color: "rgba(0, 255, 0, 0.5)" }}>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </Title>
          <Text style={{ color: "textSecondary" }}>
            {new Date(lastUpdate).toDateString()}
          </Text>
          <br />
          <Text strong="true">Number of recoveries of Covid-19</Text>
        </Card>

        <Card className={cx(styles.card, styles.deaths)}>
          <Title level={4} style={{ color: "rgba(255, 0, 0, 0.5)" }}>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Title>
          <Text style={{ color: "textSecondary" }}>
            {new Date(lastUpdate).toDateString()}
          </Text>
          <br />
          <Text strong="true">Number of deaths caused by Covid-19</Text>
        </Card>
      </Space>
    </div>
  );
};

export default Cards;
