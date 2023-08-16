import React from "react";
import { TabItem } from "./NewPostForm";

type TabItemProps = {
  item: TabItem;
  selected: boolean;
};

const TabItem: React.FC<TabItemProps> = ({ item, selected }) => {
  return <div>{item.title}</div>;
};
export default TabItem;
