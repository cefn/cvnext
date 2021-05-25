import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import { Category, Engagement, CATEGORIES, ENGAGEMENTS, ADDRESS } from "./data";
import { Immutable } from "./immutable";

type TextHolder = FunctionComponent<{ children: string }>;

// Register fonts
Font.register({
  family: "Georgia",
  fonts: [
    { src: "/fonts/Georgia.ttf" },
    { src: "/fonts/Georgia_Bold.ttf", fontWeight: 700 },
    { src: "/fonts/Georgia_Italic.ttf", fontStyle: "italic" },
    {
      src: "/fonts/Georgia_Bold_Italic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

const LayoutA4: FunctionComponent = ({ children }) => (
  <Document>
    <Page
      size="A4"
      style={{
        fontFamily: "Georgia",
        fontSize: "10pt",
        paddingTop: "1.57cm",
        paddingBottom: "1.57cm",
      }}
    >
      {children}
    </Page>
  </Document>
);

const Section: FunctionComponent = ({ children }) => (
  <View
    style={{
      marginRight: "2.54cm",
      marginLeft: "2.54cm",
    }}
  >
    {children}
  </View>
);

const Spaced: TextHolder = ({ children }) => (
  <span
    style={{
      textTransform: "uppercase",
      letterSpacing: "2pt",
      fontWeight: "bold",
    }}
  >
    {children}
  </span>
);

const Heading: TextHolder = ({ children }) => (
  <Section>
    <Text
      style={{
        padding: 0,
        paddingTop: "0.1cm",
        marginTop: "0.2cm",
        lineHeight: "0.9",
        borderTop: "2px",
        borderBottom: "1px",
      }}
    >
      <Spaced>{children}</Spaced>
    </Text>
  </Section>
);

const Address: TextHolder = ({ children }) => {
  const [name, ...lines] = children.split("\n");
  return (
    <Section>
      <Text style={{ textAlign: "center" }}>
        <Spaced>{name + "\n"}</Spaced>
        {lines.join("\n")}
      </Text>
    </Section>
  );
};

const CategorySection: FunctionComponent<{ category: Category }> = ({
  category,
}) => (
  <>
    <Heading>{category}</Heading>
    {ENGAGEMENTS.filter((engagement) => engagement.tags.includes(category)).map(
      (engagement, key) => (
        <EngagementSection key={key} {...engagement} />
      )
    )}
  </>
);

function formatDate(date: Date): string {
  return dayjs(date).format("MMM-YY");
}

const EngagementSection: FunctionComponent<Immutable<Engagement>> = ({
  title,
  subtitle,
  start,
  stop,
  description,
}) => (
  <>
    <Section>
      <View wrap={false}>
        <View>
          <Text style={{ marginTop: "0.2cm", fontWeight: "bold" }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "column", textAlign: "left" }}>
            <Text style={{ fontStyle: "italic" }}>{subtitle}</Text>
          </View>
          <View style={{ flexDirection: "column", color: "grey" }}>
            <Text>{`${formatDate(start as Date)}-${
              stop ? formatDate(stop as Date) : "Ongoing"
            }`}</Text>
          </View>
        </View>
        {description && <Text>{description}</Text>}
      </View>
    </Section>
  </>
);

export const Resume = () => (
  <LayoutA4>
    <Address>{ADDRESS}</Address>
    {CATEGORIES.map((category, key) => (
      <CategorySection {...{ category, key }} />
    ))}
  </LayoutA4>
);
