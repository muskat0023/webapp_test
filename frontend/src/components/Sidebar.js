// src/components/Sidebar.js
import React from 'react';
import TreeMenuComponent from 'react-simple-tree-menu';
import 'react-simple-tree-menu/dist/main.css';
import './Sidebar.css';
import LogoutButton from './LogoutButton';

const treeData = [
  {
    key: 'process1',
    label: '대공정 1',
    nodes: [],
  },
  {
    key: 'process2',
    label: '대공정 2',
    nodes: [
      {
        key: 'process3',
        label: '소공정 3',
        nodes: [],
      },
      {
        key: 'process4',
        label: '소공정 4',
        nodes: [
          {
            key: 'process5',
            label: '세부공정 5',
            nodes: [],
          },
          {
            key: 'process6',
            label: '세부공정 6',
            nodes: [],
          },
          {
            key: 'process7',
            label: '세부공정 7',
            nodes: [],
          },
          {
            key: 'process8',
            label: '세부공정 8',
            nodes: [],
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const handleItemClick = ({ key, label, ...props }) => {
    console.log(`Clicked on ${label} (key: ${key})`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <TreeMenuComponent data={treeData} onClickItem={handleItemClick} />
      </div>
      <div className="sidebar-footer">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;