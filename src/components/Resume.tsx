import { FC } from "react";
import { Immutable, Store } from "@lauf/lauf-store";
import { useSelected } from "@lauf/lauf-store-react";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import dayjs from "dayjs";
import {
  CATEGORIES,
  Category,
  Entry,
  AppState,
  DETAILS,
  getDetailLevel,
} from "../domain/types";
import { ADDRESS } from "../domain/data";

function formatDate(date: Date): string {
  return dayjs(date).format("MMM-YY");
}

type TextHolder = FC<{ children: string }>;

export const Resume: FC<{ store: Store<AppState> }> = ({ store }) => {
  return (
    <LayoutA4>
      <Address>{ADDRESS}</Address>
      {CATEGORIES.map((category, key) => (
        <CategorySection {...{ store, category, key }} />
      ))}
    </LayoutA4>
  );
};

const LayoutA4: FC = ({ children }) => (
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

const CategorySection: FC<{
  store: Store<AppState>;
  category: Category;
}> = ({ store, category }) => {
  const filteredEntries = useSelected(store, (state) => state.filteredEntries);
  //elements split into first, rest prevents orphaned heading
  const [first, ...rest] = filteredEntries
    .filter((entry) => entry.tags.includes(category))
    .map((entry, key) => <EntrySection key={key} {...{ store, entry }} />);
  return (
    <>
      <View wrap={false}>
        <Heading>{category}</Heading>
        {first}
      </View>
      {rest}
    </>
  );
};

const Section: FC = ({ children }) => (
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

const EntrySection: FC<{ store: Store<AppState>; entry: Immutable<Entry> }> = ({
  store,
  entry: { org: title, title: subtitle, start, stop, intro: description },
}) => {
  const detail = useSelected(store, (store) => store.detail);
  const detailLevel = getDetailLevel(detail);
  const dateElement = (
    <View style={{ flexDirection: "column", color: "grey" }}>
      <Text>{`${formatDate(start as Date)}-${
        stop ? formatDate(stop as Date) : "Ongoing"
      }`}</Text>
    </View>
  );

  return (
    <>
      <Section>
        <View wrap={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column", textAlign: "left" }}>
              <Text style={{ marginTop: "0.2cm", fontWeight: "bold" }}>
                {title}
              </Text>
            </View>
            {/* detail:"None" (no subtitle included) date aligns with title*/}
            {detailLevel == getDetailLevel("None") && dateElement}
          </View>
          {detailLevel >= getDetailLevel("Some") && (
            <>
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
                {/* detail:"Some" (subtitle included) date aligns with subtitle*/}
                {detailLevel > getDetailLevel("None") && dateElement}
              </View>
              {detailLevel >= getDetailLevel("Most") && description && (
                <Text>{description}</Text>
              )}
            </>
          )}
        </View>
      </Section>
    </>
  );
};

// Register fonts
Font.register({
  family: "Georgia",
  fonts: [
    { src: "./fonts/Georgia.ttf" },
    { src: "./fonts/Georgia_Bold.ttf", fontWeight: 700 },
    { src: "./fonts/Georgia_Italic.ttf", fontStyle: "italic" },
    {
      src: "./fonts/Georgia_Bold_Italic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});
