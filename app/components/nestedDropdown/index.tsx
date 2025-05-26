"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { Button, Menu, MenuItem } from "@mui/material";
import { Header_data } from "../../../static-data/index";

const NestedDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subMenus, setSubMenus] = useState<
    Record<number, { anchorEl: HTMLElement; open: boolean }>
  >({});

  const handleMainMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMainMenuClose = () => {
    setAnchorEl(null);
    setSubMenus({});
  };

  const handleSubMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    setSubMenus((prev) => ({
      ...prev,
      [id]: { anchorEl: event.currentTarget, open: true },
    }));
  };

  const handleSubMenuClose = (id: number) => {
    setSubMenus((prev) => ({
      ...prev,
      [id]: { ...prev[id], open: false },
    }));
  };

  const renderMenuItems = (items: any[]) => {
    return items.map((item) => {
      const hasChildren = item.children?.length > 0;

      return (
        <div key={item.id}>
          {hasChildren ? (
            <MenuItem
              onMouseEnter={(e) => handleSubMenuOpen(e, item.id)}
              onMouseLeave={() => handleSubMenuClose(item.id)}
            >
              {item.name}
            </MenuItem>
          ) : (
            <MenuItem
              component={NextLink}
              href={item.link || "#"}
              onClick={handleMainMenuClose}
            >
              {item.name}
            </MenuItem>
          )}

          {hasChildren && (
            <Menu
              anchorEl={subMenus[item.id]?.anchorEl}
              open={Boolean(subMenus[item.id]?.open)}
              onClose={() => handleSubMenuClose(item.id)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              MenuListProps={{
                onMouseEnter: () =>
                  handleSubMenuOpen(
                    { currentTarget: subMenus[item.id]?.anchorEl } as any,
                    item.id
                  ),
                onMouseLeave: () => handleSubMenuClose(item.id),
              }}
            >
              {renderMenuItems(item.children)}
            </Menu>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleMainMenuOpen}>
        Open Category
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMainMenuClose}
      >
        {renderMenuItems(Header_data)}
      </Menu>
    </div>
  );
};

export default NestedDropdown;
