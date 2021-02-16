import React from 'react';
// import '../breadcrumb/index.css';

const BreadCrumb = () => {
	var arrow = { '--bs-breadcrumb-divider': '>' };
	return (
		<nav style={{ arrow }} aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<a href="#">Home</a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					Library
				</li>
			</ol>
		</nav>
	);
};

export default BreadCrumb;

// render(){
//   var style = { "--my-css-var": 10 } as React.CSSProperties;
//   return <div style={style}>...</div>
// }
