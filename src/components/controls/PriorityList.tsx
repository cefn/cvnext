import { Paper, List, ListItem, Chip, FormLabel } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HistoryIcon from "@material-ui/icons/History";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import CategoryIcon from "@material-ui/icons/Category";
import DragHandleOutlinedIcon from "@material-ui/icons/DragHandleOutlined";
import { Store } from "@lauf/lauf-store";
import { useSelected } from "@lauf/lauf-store-react";
import { List as MovableList, arrayMove } from "react-movable";
import { AppState } from "../../domain/types";
import { ALL_ENTRIES } from "../../domain/data";

export function PriorityList({ store }: { store: Store<AppState> }) {
  const sortOrder = useSelected(store, (state) => state.sortOrder);
  const limit = useSelected(store, (state) => state.limit);
  const disabled = limit === ALL_ENTRIES.length;
  return (
    <MovableList
      values={[...sortOrder]}
      onChange={({ oldIndex, newIndex }) =>
        store.edit(
          (draft) =>
            void (draft.sortOrder = arrayMove(
              draft.sortOrder,
              oldIndex,
              newIndex
            ))
        )
      }
      renderList={({ children, props }) => (
        <>
          <FormLabel component="label" color={"primary"}>
            Priority
          </FormLabel>
          <List {...props}>{children}</List>
        </>
      )}
      renderItem={({ value, props }) => (
        <ListItem {...props}>
          <Chip
            disabled={disabled}
            label={value}
            color={disabled ? "default" : "primary"}
            size={"small"}
            style={{ width: "100%" }}
            icon={
              value === "boost" ? (
                <FavoriteIcon />
              ) : value === "recency" ? (
                <HistoryIcon />
              ) : value === "duration" ? (
                <TimelapseIcon />
              ) : (
                <DragHandleOutlinedIcon />
              )
              // for employment WorkIcon
              // for education SchoolIcon
              // for society
              // for code CodeIcon
              // for electronics MemoryIcon (BuildIcon, MouseIcon)
              // for invention Emoji (bulb), Bath
              // for management PeopleIcon SupervisedUserIcon
              // for machinelearning SettingsIcon, StorageIcon
              // for art PaletteIcon BrushIcon
              // for design CategoryIcon
              // for sports SportsHandball
              // for writing FormatQuote
            }
          />
        </ListItem>
      )}
    />
  );
}
