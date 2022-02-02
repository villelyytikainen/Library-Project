import React from 'react';
import './Sidebar.css';

export default function Sidebar({toggleModal, toggleSidebar, showSidebar}) {
	let sidebarClass = showSidebar ? 'sidebar-open' : 'sidebar-collapsed';
	if(!showSidebar){
		return (
			<div className={sidebarClass}>
				<svg onClick={toggleSidebar} className="sidebar-svg" height="30" width="30">
					<line x1="0" y1="5" x2="30" y2="5"/>
					<line x1="0" y1="12" x2="30" y2="12"/>
					<line x1="0" y1="19" x2="30" y2="19" />
				</svg>
				<ul className="buttons">
					<li><button onClick={toggleModal} className="actionButtons addButton">ADD</button></li>
				</ul>
			</div>
			)
	}
	else{
		return (
		<div className={sidebarClass}>
			<svg onClick={toggleSidebar} className="sidebar-svg" height="30" width="30">
				<line x1="0" y1="12" x2="15" y2="2" />
				<line x1="0" y1="12" x2="30" y2="12" />
				<line x1="0" y1="12" x2="15" y2="22" />
			</svg>
			<ul className="buttons">
				<li><button onClick={toggleModal} className="actionButtons addButton">ADD</button></li>
			</ul>
		</div>
		)
	}
}
