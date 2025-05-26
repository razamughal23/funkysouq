"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import { Header_data } from "../../../static-data/index";

const NestedDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subMenus, setSubMenus] = useState<
    Record<number, { anchorEl: HTMLElement | null; open: boolean }>
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

  const renderMenuItems = (items: any[]) =>
    items.map((item) => {
      const hasChildren = item.children?.length > 0;
      return (
        <Box key={item.id} onMouseLeave={() => handleSubMenuClose(item.id)}>
          <MenuItem
            onMouseEnter={(e) => hasChildren && handleSubMenuOpen(e, item.id)}
            component={!hasChildren ? NextLink : undefined}
            href={!hasChildren ? item.link || "#" : undefined}
            onClick={!hasChildren ? handleMainMenuClose : undefined}
          >
            {item.name}
          </MenuItem>
          {hasChildren && (
            <Menu
              anchorEl={subMenus[item.id]?.anchorEl}
              open={Boolean(subMenus[item.id]?.open)}
              onClose={() => handleSubMenuClose(item.id)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // MenuListProps={{
              //   onMouseEnter: (e) =>
              //     handleSubMenuOpen(
              //       { currentTarget: subMenus[item.id]?.anchorEl! } as any,
              //       item.id
              //     ),
              // }}
            >
              {renderMenuItems(item.children)}
            </Menu>
          )}
        </Box>
      );
    });

  return (
    <div>
      <Button variant="contained" onClick={handleMainMenuOpen}>
        Open Category
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMainMenuClose}
        MenuListProps={{ onMouseLeave: handleMainMenuClose }}
      >
        {renderMenuItems(Header_data)}
      </Menu>
    </div>
  );
};

export default NestedDropdown;
