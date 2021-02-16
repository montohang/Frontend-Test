import React from 'react';
// import '../breadcrumb/index.css';

const BreadCrumb = () => {
	return (
		<nav aria-label="breadcrumb" className="bg-light">
			<div className="px-3">
				<ol className="breadcrumb">
					<li className="breadcrumb-item" aria-current="page">
						HOME
					</li>
					<li className="breadcrumb-item" aria-current="page">
						<a href="#">DAFTAR MOBIL</a>
					</li>
				</ol>
			</div>
		</nav>
	);
};

export default BreadCrumb;

// render(){
//   var style = { "--my-css-var": 10 } as React.CSSProperties;
//   return <div style={style}>...</div>
// }
